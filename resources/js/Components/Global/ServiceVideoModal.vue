<script setup>
</script>

<template>

    <div id="serviceVideoModal" class="modal fade" tabindex="-1" aria-labelledby="serviceVideoModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="plyr__video-embed" id="player">
                        <iframe
                        :src="`https://www.youtube.com/embed/XZePsCuSOtU?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1`"
                        allowfullscreen
                        allowtransparency
                        allow="autoplay"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>