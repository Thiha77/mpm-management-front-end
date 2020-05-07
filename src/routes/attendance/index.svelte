<script>
    import Api from '../../components/util/Api.svelte';
    import { axiosPost } from '../../util/api';
    import List from '../../components/attendance/list.svelte';
    import Search from '../../components/attendance/search.svelte';
    import { attendanceMessages, attendance } from '../../stores/attendance/store';
    import { apiInfo, fields } from '../../store.js';
    import { Toast, CfmDelete } from '../../util/salert';
    import { stores,goto } from '@sapper/app';
    import moment from 'moment';
    import { validate } from '../../util/validator';
    import ValidationBox from '../../components/util/ValidationBox.svelte';
    let apiInstance;
    let result;
    let fromdate;
    let todate;
    let url = $apiInfo.basePath + '/attendances';
    const method = 'get';
    const { session } = stores();
    let vErrors;
    let constraints = {
        employeeId: {
            presence: { allowEmpty: false
            }
        },
        employeeName: {
            presence: { allowEmpty: false
            }
        },
        fromDate: {
            datetime: true
        },
        toDate: {
            datetime: true
        }
    };
    const deleteAttendance = async(event) => {
        let id = event.detail.id;
        CfmDelete.fire().then((result) => {
                if (result.value) {
                    del(id);
                }
            });
    }
     const del = async(id) => {
        const urlDel = $apiInfo.basePath + '/attendances/delete';
        let res = await axiosPost(urlDel, { id : id});
        if(res.data > 0){
            apiInstance.refresh();
            Toast.fire(
            'Deleted!',
            $fields.attendance.message.deleteSuccess,
            'success'
            );
        }
    }
    const editAttendance = (event) => {
        let id = event.detail.attendance.id;
        goto(`attendance/edit/${id}`);
    }
    const search = async(event) => {
        let textSearch = event.detail.textSearch;
        let exUrl = (textSearch)? $apiInfo.basePath + '/attendances/search/' + textSearch : $apiInfo.basePath + '/attendances';
        apiInstance.loadExternal(exUrl);
    }
    const searchadvance = async(event) => {
        let searchdata = event.detail.searchdata;
            if(searchdata.fromDate.length != 0)
            {
                fromdate = moment(searchdata.fromDate).format('YYYY-MM-DD');
            }
            else{
                fromdate = "";
            }
            if(searchdata.toDate.length != 0)
            {
                todate = moment(searchdata.toDate).format('YYYY-MM-DD');
            }
            else{
                todate = "";
            }
        searchdata = {
            employeeId : searchdata.employeeId,
            employeeName : searchdata.employeeName,
            fromDate : fromdate,
            toDate : todate
        }             
         vErrors = validate(searchdata, constraints);
        if(vErrors){
            return;
        }  
        let posturl = $apiInfo.basePath + '/attendances/searchadvance';
        apiInstance.postExternal(posturl,searchdata);
    }
</script>
<svelte:head><title>Attendance</title></svelte:head>
<section class="pr-2 pl-2">
<div class="container">
<div class="row">
    <div class="col-lg-9">
    {#if $session.lan && $fields}
        <Search on:search={search} on:searchadvance = {searchadvance}></Search>
        <Api {url} {method} let:data let:loading let:error bind:this={apiInstance}>
            {#if data}
                <List attendances={data} on:delete={deleteAttendance} on:edit={editAttendance}></List>
            {/if}
        </Api>
    {/if}
    </div>
    <div class="col-lg-3" >
            {#if vErrors}
                <ValidationBox {vErrors}></ValidationBox>
            {/if}
    </div>
</div>
</div>
</section>