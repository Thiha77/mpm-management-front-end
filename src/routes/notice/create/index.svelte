<script>
    import CreateNotice from '../../../components/notice/create.svelte';
    import Api from '../../../util/api';
    import { stores, goto } from '@sapper/app';
    import { noticeMessages } from '../../../stores/notice/store';
    const { session } = stores();
    $session.user = { employeeId: 1}; //must delete after merge

    const saveNotice = (event) => {
        let notice = event.detail.notice;
        notice = { ...notice, employeeId : $session.user.employeeId};
        console.log(notice);

        const url = 'http://localhost:5000/notices/save';
        Api(url, notice)
        .then( (result) => {
            if(result.error == null){
                $noticeMessages = {
                    message: 'Success',
                    error: 'Error'
                }
                goto('../notice');
            }else{
                $noticeMessages = {
                    message: '',
                    error: result.error
                }
            }
        })

    }

</script>

{#if $noticeMessages.error}
    <h1>{ $noticeMessages.error }</h1>
{/if}
<CreateNotice on:save={saveNotice}></CreateNotice>

<style>
</style>