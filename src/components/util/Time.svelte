<script>
    let optionshr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
    let optionsmin = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
export let mhr;
export let mmin;
// console.log("Tmhr", mhr);
// console.log("Tmmin", mmin);

export let time = {
    selectedhr : '',
    selectedmin : ''
}

if(mhr,mmin){
time = {
    selectedhr :  mhr[0] === '0' ? mhr[1] :mhr,
    selectedmin : mmin[0] === '0' ? mmin[1] :mmin
}
}
// console.log("shr", time.selectedhr);
// console.log("smin",time.selectedmin);

</script>
{#if mhr,mmin}
<label>Hour:</label>
<select value= {optionshr[time.selectedhr-1]} bind:value={time.selectedhr}>
	{#each optionshr as option}
		<option value={option}>{option}</option>
	{/each}
</select>
<label>Minutes:</label>
<select value = {optionsmin[time.selectedmin]} bind:value={time.selectedmin}>
	{#each optionsmin as option}
		<option value={option}>{option.toString().length == 1 ? `0${option}` : option}</option>
	{/each}
</select>
<span>{time.selectedhr}:{time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin}</span>
{:else}
<label>Hour:</label>
<select bind:value={time.selectedhr}>
	{#each optionshr as option}
		<option value={option}>{option}</option>
	{/each}
</select>
<label>Minutes:</label>
<select bind:value={time.selectedmin}>
	{#each optionsmin as option}
		<option value={option}>{option.toString().length == 1 ? `0${option}` : option}</option>
	{/each}
</select>
<span>{time.selectedhr}:{time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin}</span>
{/if}

<style>
    span{
        border-style: inset;
        width: 80px;
        text-align: center;
        border-radius: 10px;
    }
    select{
        width:  50px;
        border-radius: 10px;
    }
</style>
