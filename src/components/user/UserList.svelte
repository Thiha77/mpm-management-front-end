<script>
export let users;
import {createEventDispatcher} from "svelte";
import { userEdit,user } from "../../stores/user/store.js";
const dispatch = createEventDispatcher();

let editUser = (user) => {
    $userEdit = {
        id: user.id,
        name: user.name,
        userName: user.userName,
        password: user.password,
        employeeId: user.employeeId
    }
};

let deleteUser = id => {
        dispatch('deleteUser',{id:id});
    };
</script>
<section>
    <div class="clearfix mb-3">
        <h3 class="float-left">User List</h3>
        <!-- <button class="btn btn-primary float-right" on:click={addUser}>New User</button> -->
        <a class="btn btn-success float-right" href='user/create'>Add New User</a>
    </div>
    <h1>{$user.createMessage}</h1>
    <div class="table-responsive-sm ">
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">User Name</th>
                    <th scope="col">User Password</th>
                    <th scope="col">Employee Name</th>
                    <th scope="col">Action</th>
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
                        <td>{user.password}</td>
                        <td>{user.Employee['name']}</td>
                        <td>
                            <!-- <a class="btn btn-info" href='user/edit'>Edit</a> -->
                            <a class="btn btn-info" href='user/edit' on:click={editUser(user)}>Edit</a>
                            <button class="btn btn-danger" on:click={deleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                {/each}
                {/if}
            </tbody>
        </table>
    </div><!-- .table-responsive-sm    -->
    
        
</section>