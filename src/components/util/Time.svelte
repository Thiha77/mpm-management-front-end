<script>
import { fields } from '../../store';
    let optionshr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    let optionsmin = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,
    31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59];
export let mhr;
export let mmin;
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
</script>
{#if mhr,mmin}
    <label>{$fields.attendance.attendance.hours}:</label>
    <div class="dropdown">
        <select class="dropdown-select" value= {optionshr[time.selectedhr-1]} bind:value={time.selectedhr}>
            {#each optionshr as option}
                <option value={option}>{option}</option>
            {/each}
        </select>
    </div>
    <label>{$fields.attendance.attendance.minutes}:</label>
    <div class="dropdown">
        <select class="dropdown-select"  value = {optionsmin[time.selectedmin]} bind:value={time.selectedmin}>
            {#each optionsmin as option}
                <option value={option}>{option.toString().length == 1 ? `0${option}` : option}</option>
            {/each}
        </select>
    </div>
    <span>{time.selectedhr}:{time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin}</span>
{:else}
    
        <label>{$fields.attendance.attendance.hours}:</label>
        <div class="dropdown">
            <select bind:value={time.selectedhr} class="dropdown-select">
                {#each optionshr as option}
                    <option value={option}>{option}</option>
                {/each}
            </select>
        </div>
    <label>{$fields.attendance.attendance.minutes}:</label>
    <div class="dropdown">
        <select class="dropdown-select"  bind:value={time.selectedmin}>
            {#each optionsmin as option}
                <option value={option}>{option.toString().length == 1 ? `0${option}` : option}</option>
            {/each}
        </select>
    </div>
    <span>{time.selectedhr}:{time.selectedmin.toString().length == 1 ? `0${time.selectedmin}` : time.selectedmin}</span>
    
{/if}
