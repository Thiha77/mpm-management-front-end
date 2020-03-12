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
    import NoticeDetail from '../../../components/notice/detail.svelte';
    export let notice;
</script>

{#if notice}
    <NoticeDetail {notice}></NoticeDetail>
{/if}