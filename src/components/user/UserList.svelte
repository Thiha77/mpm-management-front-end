<script>
import {createEventDispatcher} from "svelte";
import { userEdit,user } from "../../stores/user/store.js";
const dispatch = createEventDispatcher();
export let users;

let editUser = (user) => {
        dispatch("editUser",{user:user});
    };
let deleteUser = id => {
        dispatch('deleteUser',{id:id});
    };
</script>
<section>
   <div class="container">
        <div class="row">
            <div class="col">
                <h1>{$user.message}</h1>
                <div class="table-responsive-sm ">
                    <div class="table-wrapper">
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-6"><h3 class="float-left">User List</h3></div>
                                <div class="col-sm-6"><a class="btn btn-info float-right" href='user/create'><i class="fas fa-plus-circle"></i> Add New User</a></div>
                            </div>
                        </div>
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">User ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">User Name</th>
                                    <!-- <th scope="col">User Password</th> -->
                                    <th scope="col">Employee Name</th>
                                    <th scope="col">Role Name</th>
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
                                        <!-- <td>{user.password}</td> -->
                                        <td>{user.Employee['name']}</td>
                                        <td>{user.Role['name']}</td>
                                        <td>
                                            <!-- <a class="btn btn-info" href='user/edit'>Edit</a> -->
                                            <button  class="btn btn-info"on:click={editUser(user)} title="Edit"><i class="fas fa-pen"></i></button>
                                            <button class="btn btn-danger" on:click={deleteUser(user.id)} title="Delete"><i class="far fa-trash-alt"></i></button>
                                        </td>
                                    </tr>
                                {/each}
                                {/if}
                            </tbody>
                        </table>
                    </div>
                    
                </div><!-- .table-responsive-sm    -->
            </div>
        </div>
   </div>  
</section>