<template> 
<form class="add-form">
    <div class="form-contorl">
        <label>Task</label>
        <input type="text" name="text"
        placeholder="Add Task" />
    </div>
    <div class="form-contorl">
        <label>Day & Time</label>
        <input
            type="text"
            name="day"
            placeholder="Add Day & Time"
        />
    </div>
    <div class="form-control form-control-check">
        <label>Set Reminder</label>
        <input type="checkbox" name="reminder" />
    </div>
    
    <input type="checkbox" name="Save Task"
        class="btn btn-block" />
</form>
</template>