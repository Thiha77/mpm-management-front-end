<script>
import {createEventDispatcher} from "svelte";
import { userEdit,user } from "../../stores/user/store";
import { nav,fields } from '../../store';
const dispatch = createEventDispatcher();
export let users;

let editUser = (user) => {
        dispatch("editUser",{user:user});
    };
let deleteUser = id => {
        dispatch('deleteUser',{id:id});
    };
</script>
<div class="row" >
    <div class="col">
        <h1>{$user.message}</h1>
        <div class="table-wrapper card-list-mpm1">
            <div class="table-title">
                <div class="row">
                    <div class="col"><h3 class="float-left">{$fields.user.form.listTitle}</h3></div>
                    <div class="col"><a class="btn btn-white float-right" href='user/create'><i class="fas fa-plus-circle"></i> {$fields.user.form.addUser}</a></div>
                </div>
            </div>
            <table class="table table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">{$fields.user.user.userId}</th>
                        <th scope="col">{$fields.user.user.name}</th>
                        <th scope="col">{$fields.user.user.userName}</th>
                        <!-- <th scope="col">User Password</th> -->
                        <th scope="col">{$fields.user.user.empName}</th>
                        <th scope="col">{$fields.user.user.roleName}</th>
                        <th scope="col">{$fields.user.form.action}</th>
                    </tr>
                </thead>
                <tbody>
                    {#if users.length === 0}
                        <tr>No Attendance Record Found!</tr>
                    {:else}
                    {#each users as user}
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.userName}</td>
                            <!-- <td>{user.password}</td> -->
                            <td>{user.Employee['name']}</td>
                            <td>{user.Role['name']}</td>
                            <td>
                                <!-- <a class="btn btn-info" href='user/edit'>Edit</a> -->
                                <button  class="btn btn-blue"on:click={editUser(user)} title={$fields.user.title.editBtnTitle}><i class="fas fa-pen"></i></button>
                                <button class="btn btn-danger" on:click={deleteUser(user.id)} title={$fields.user.title.deleteBtnTitle}><i class="far fa-trash-alt"></i></button>
                            </td>
                        </tr>
                    {/each}
                    {/if}
                </tbody>
            </table>
        </div>
    </div>
</div>