<script>
    import CreateNotice from '../../../components/notice/create.svelte';
    import { axiosPost } from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { noticeMessages } from '../../../stores/notice/store';
    import { apiInfo } from '../../../store.js';
    const { session } = stores();
    $session.user = { employeeId: 1}; //must delete after merge

    const saveNotice = async(event) => {
        let notice = event.detail.notice;
        notice = { ...notice, employeeId : $session.user.employeeId};

        const url = $apiInfo.basePath + '/notices/save';
        let result = await axiosPost(url, notice);
        if(result.error == null){
            $noticeMessages = {
                message: 'Create Success',
                error: 'Error'
            }
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