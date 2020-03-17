<script>
    import CreateNotice from '../../../components/notice/create.svelte';
    import { axiosPost } from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { noticeMessages } from '../../../stores/notice/store';
    import { apiInfo } from '../../../store.js';
    import { Toast, Err } from '../../../util/salert.js';
    // import validate  from 'validate.js';
    import { validate } from '../../../util/validator';
    const { session } = stores();

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
        // console.log(notice);;
        let vErrors = validate(notice, constraints);

        if(vErrors){
            Err.fire(
                'Err',
                JSON.stringify(vErrors),
                'error'
            );
            return;
        }  

        const url = $apiInfo.basePath + '/notices/save';
        let result = await axiosPost(url, notice);
        if(result.error == null){
            Toast.fire(
                'Success!',
                'New notice is successfully created.',
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

{#if $noticeMessages.error}
    <h1>{ $noticeMessages.error }</h1>
{/if}
<CreateNotice on:save={saveNotice}></CreateNotice>

<style>
</style>