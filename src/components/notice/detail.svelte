<script>
    export let notice;
</script>
<div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card card-mpm1">
                <div class="card-body">
                    <div class="row">
                        <div class="col-1">
                            <span><img src="favicon.png" class="notice-img" alt=""><hr></span>    
                        </div>
                        <div class="col-11">
                            <h3 class="notice-title">{notice.title}</h3>
                            <p class="text-secondary pt-3">{notice.description}</p>
                            <p class="text-secondary pt-3">{notice.summary}</p>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <div class="col-md-12">
                        <a href="notice" class="btn btn-outline-warning float-right">Back</a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>