<script>
    import CreateNotice from '../../../components/notice/create.svelte';
    import { axiosPost } from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { noticeMessages } from '../../../stores/notice/store';
    import { apiInfo } from '../../../store.js';
    import { Toast } from '../../../util/salert.js';
    const { session } = stores();

    const saveNotice = async(event) => {
        let notice = event.detail.notice;
        notice = { ...notice, employeeId : $session.user.employeeId};

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