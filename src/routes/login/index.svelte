<script>
    import Api from '../../components/util/Api.svelte';
    import LoginView from '../../components/login/Login.svelte';
    import { goto, stores } from '@sapper/app';
    const { session } = stores();

</script>
<svelte:head>
	<title>Login</title>
</svelte:head>
{#if !$session.user}
<LoginView />
{/if} 