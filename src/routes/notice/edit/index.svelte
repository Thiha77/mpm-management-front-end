<script>
    import EditNotice from '../../../components/notice/edit.svelte';
    import { notice, noticeMessages } from '../../../stores/notice/store';
    import { apiInfo } from '../../../store.js';
    import { axiosPost }from '../../../util/api.js';
    import { goto } from '@sapper/app';

    const saveNotice = async(event) => {
        const url = $apiInfo.basePath + '/notices/update';
        let notice = event.detail.notice;
        let result = await axiosPost(url, notice);
        if(result.error == null){
            $noticeMessages = {
                message: 'Update Success',
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

<EditNotice notice={$notice} on:save={saveNotice}></EditNotice>

<style></style>