const Swal = require('sweetalert2');

const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

const CfmDelete = Swal.mixin({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
    });

const Success = Swal.mixin({
    icon: 'success',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
})

const Err = Swal.mixin({
    icon: 'error',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
})

const Info = Swal.mixin({
    icon: 'info',
    confirmButtonColor: '#3085d6',
    confirmButtonText: 'OK'
})

const SingleValue = Swal.mixin({
    input: 'text',
    showCancelButton: true,
    inputValidator: (value) => {
        if (!value) {
        return 'Enter Value!'
        }
    }
})

module.exports = {
    Toast, CfmDelete, Success, Err, Info, SingleValue
}