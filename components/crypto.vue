<template>
    <div>

    </div>
</template>

<script  setup>
    const crypto = reactive({})

    onMounted(async () => {
        const { data} = await (await fetch("api/crypto/")).json();
     console.log(data)
    });

;


</script>
