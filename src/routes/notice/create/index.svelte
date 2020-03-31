<script>
    import CreateNotice from '../../../components/notice/create.svelte';
    import { axiosPost } from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { noticeMessages } from '../../../stores/notice/store';
    import { apiInfo, fields } from '../../../store';
    import { Toast, Err } from '../../../util/salert.js';
    import { validate } from '../../../util/validator';
    import ValidationBox from '../../../components/util/ValidationBox.svelte';
    import { onMount } from 'svelte';

    const { session } = stores();
    
    let vErrors;
    let constraints = {
        title: {
            presence: { allowEmpty: false }
        },
        description: {
            datetime: true
        }
    };

    const saveNotice = async(event) => {
        let notice = event.detail.notice;
        notice = { ...notice, employeeId : $session.user.employeeId};

        vErrors = validate(notice, constraints);
        if(vErrors){
            return;
        }  

        const url = $apiInfo.basePath + '/notices/save';
        let result = await axiosPost(url, notice);
        if(result.error == null){
            Toast.fire(
                'Success!',
                fields.message.saveSuccess,
                'success'
            )
            goto('../notice');
        }else{
            $noticeMessages = {
                    message: '',
                    error: result.error
                }
        }
    }

</script>
<div class="container">
    <div class="row">
        <div class="col-lg-9">
            {#if $session.lan && $fields}
            <CreateNotice on:save={saveNotice}></CreateNotice>
            {/if}
        </div>
        <div class="col-lg-3" >
            {#if vErrors}
                <ValidationBox {vErrors}></ValidationBox>
            {/if}
        </div>
    </div>
</div>





<style>
</style>