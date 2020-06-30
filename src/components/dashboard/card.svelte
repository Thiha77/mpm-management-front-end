<div class="card mb-4">
    <div class="card-body">
        <h5 class="card-title">
            <slot name="title">
            </slot>
        </h5>
        <p class="card-text">
            <slot name="text">
            </slot>
        </p>    
    </div>
    <div class="card-footer d-flex align-items-center justify-content-between">    
        <slot name="link" ></slot>
    </div> 
</div>
