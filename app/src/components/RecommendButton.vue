<template>
    <div class="recommendButton">
        <RouterLink :to="{name: 'recommendation'}" class="recommendButton__link">Recommend a book</RouterLink>
        <svg width="25" height="25" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M70.3335 34.2222H39.7779V3.66666C39.7779 2.92995 39.4853 2.22341 38.9643 1.70248C38.4434 1.18154 37.7368 0.888885 37.0001 0.888885C36.2634 0.888885 35.5569 1.18154 35.0359 1.70248C34.515 2.22341 34.2224 2.92995 34.2224 3.66666V34.2222H3.6668C2.93009 34.2222 2.22355 34.5149 1.70262 35.0358C1.18169 35.5567 0.889027 36.2633 0.889027 37C0.87532 37.361 0.939157 37.7208 1.07624 38.055C1.21332 38.3893 1.42045 38.6903 1.68368 38.9377C1.94692 39.1852 2.26013 39.3733 2.60222 39.4895C2.94431 39.6056 3.30733 39.6471 3.6668 39.6111H34.2224V70.3333C34.2224 71.07 34.515 71.7766 35.0359 72.2975C35.5569 72.8184 36.2634 73.1111 37.0001 73.1111C37.7368 73.1111 38.4434 72.8184 38.9643 72.2975C39.4853 71.7766 39.7779 71.07 39.7779 70.3333V39.7778H70.3335C71.0702 39.7778 71.7767 39.4851 72.2977 38.9642C72.8186 38.4432 73.1112 37.7367 73.1112 37C73.1112 36.2633 72.8186 35.5567 72.2977 35.0358C71.7767 34.5149 71.0702 34.2222 70.3335 34.2222Z" fill="#EAE8D9"/>
         </svg>
      </div>
</template>
<script>
</script>
<style>
    .recommendButton {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--text);
        padding: 13px 30px;
        border-radius: 50px;
        color: var(--background);
    }

    .recommendButton__link {
        font-weight: 400;
        font-size: 1.2rem;
        text-decoration: none;
        padding-right: 15px;
        color: var(--background);
        cursor: pointer;
    }

    /* add animation/loading type? */
    /* .recommendButton:hover {
        color: var(--text);
        border: 2px solid var(--text);
        background-color: var(--background);
    }

    .recommendButton__link:hover {
        color: var(--text);
    } */
</style>