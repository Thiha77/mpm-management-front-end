<script context="module">
    import { axiosGet } from '../../../util/api';
    import config from '../../../config';
	export async function preload({ params }) {
        
        let id = params.id;
        let urlNoticeById = `${config.apiInfo.basePath}/notices/${id}`;
        let res = await axiosGet(urlNoticeById);
		if (res.data) {
			return { notice: res.data };
		}else{
            this.error(404, 'Not Found!');
        }
	}
</script>
<script>
    import EditNotice from '../../../components/notice/edit.svelte';
    import { apiInfo, fields } from '../../../store';
    import { axiosPost }from '../../../util/api.js';
    import { stores, goto } from '@sapper/app';
    import { Toast, Err } from '../../../util/salert';

    const { session } = stores();
    export let notice;

    const saveNotice = async(event) => {
        const url = $apiInfo.basePath + '/notices/update';
        let notice = event.detail.notice;
        let result = await axiosPost(url, notice);
        if(result.error == null){
            Toast.fire(
                'Success!',
                 $fields.notice.message.updateSuccess,
                'success'
            );
            goto('../notice');
        }else{
            Toast.fire(
                'Fail!',
                 $fields.notice.message.updateFail,
                'error'
            );
        }
    }
</script>

{#if notice}
<EditNotice {notice} on:save={saveNotice}></EditNotice>
{/if}
<style></style>