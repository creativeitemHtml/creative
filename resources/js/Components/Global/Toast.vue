<template>
    
</template>

<script setup>
import { usePage } from '@inertiajs/vue3';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

/**
 * Array variable to store setting options for toastify
 * @var array
 */

const options = {
    // 'position': toast.POSITION.TOP_CENTER,
    'autoClose': 2000,
    'closeOnClick': true,
    'type': 'default'
}

const props = defineProps({
    type: String,
    message: String
})

/**
 * Laravel's flash message object
 * @var object
 */

const flash = usePage().props.flash

/**
 * Main function trigger toast notification
 * @param string type
 * @param string message
 */
const notify = (type, message) => {

    //Setting for type of notificatiob. e.g error, warning, success or info
    options['type'] = type;

    toast(message, options);
}

/**
 * Trigger toast notification if success message is present
 */
 if(flash.success){
    notify('success', flash.success);
}

/**
 * Trigger toast notification if error message is present
 */
if(flash.error){
    notify('error', flash.error);
}

/**
 * Trigger toast notification if information message is present
 */
if(flash.info){
    notify('info', flash.info);
}

/**
 * Trigger toast notification if warning message is present
 */
if(flash.warning){
    notify('warning', flash.warning);
}

if(flash.message){
    notify(flash.type, flash.message);
}
</script>