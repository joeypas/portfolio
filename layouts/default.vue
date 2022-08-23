<script setup>
const route = useRoute()

useHead({
    meta: [{name: 'og:title', content: `Joe Tech - ${route.meta.title}`}]
})
</script>

<template>
    <Head>
        <Title>Joe Tech - {{route.meta.title}}</Title>
    </Head>
    <div class="flex flex-col min-h-[100vh] max-w-screen">
        <Header />
            <slot  />
        <Footer />
    </div>
</template>