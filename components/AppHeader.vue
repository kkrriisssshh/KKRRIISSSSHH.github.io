<style lang="css">
    @import url(public/awsm.css);
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css);
</style>
<template>
    <div>
        <header>
            <h1>
                [krissh] 🐈 🐅
            </h1>
            <p>
                [the most intelligent human on earth]
            </p>
            <nav>
              <ul>
                <li>
                  <NuxtLink to="/">[homepage]</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/projects">[projects]</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/about-me">[about-me]</NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/contact-me">[contact-me]</NuxtLink>
                </li>
              </ul>
            </nav>
            <Separate></Separate>
        </header>
    </div>
</template>