<template>
  <Navbar />
  <main class="homepage">
    <section class="homepage__improve">
      <div class="flex justify-center">
        <div class="mt-24">
          <div>
            <h1 class="text-purple text-4xl font-bold mb-9">
              طور متجرك ووسع اَفاق تجارتك مع سوق تطبيقات زد
            </h1>
          </div>

          <div class="mb-10 flex justify-center text-center">
            <h4 class="text-lg w-7/12">
              طور تجارتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
              ارباحك عبر ادارة متجرك بشكل فعال واحترافي
            </h4>
          </div>
          <div class="flex justify-center">
            <div
              class="
                w-72
                h-14
                bg-purple
                rounded-lg
                overflow-hidden
                flex
                justify-center
                items-center
              "
            >
              <div class="text-orange text-sm font-extrabold ml-3">
                تصفح التطبيقات
              </div>
              <div><img src="../assets/images/DownArrow.svg" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="homepage__showCase my-11">
      <div class="relative w-full h-screen">
        <div class="absolute right-3/4 max-h-full">
          <img src="../assets/images/DotPattern.svg" alt="" />
        </div>
        <div class="absolute top-72 right-14 mr-64 mt-10 max-h-full">
          <img src="../assets/images/Circle.svg" alt="" />
        </div>
        <div class="absolute right-1/4 top-3/2 mt-10 max-h-full">
          <img src="../assets/images/appsPhoto.png" alt="" />
        </div>
      </div>
    </section>

    <article>
      <div class="mb-16">
        <div>
          <h1 class="text-2xl text-center mb-4 font-bold">التطبيقات المميزة</h1>
          <h4 class="text-sm text-center font-semibold">
            تطبيقات تقدم حلول وخدمات مميزه نوصي بتجربتها
          </h4>
        </div>
        <div class="grid grid-cols-4 gap-x-4 gap-y-4">
          <AppCard
            v-for="card in cards"
            :key="card.id"
            :app-name="card.appName"
            :app-img="card.appImg"
            :number-of-stars="card.numberOfStars"
            :developer-name="card.developerName"
            :description="card.description"
          />
        </div>

        <div class="flex items-center justify-center">
          <button
            class="
              flex
              items-center
              justify-center
              bg-transparent
              text-orange
              border-0
            "
          >
            <span>جميع التطبيقات</span>
            <img
              class="w-5 h-5 mr-1"
              src="../assets/images/DownArrow.svg"
              alt=""
            />
          </button>
        </div>
      </div>
    </article>

    <section>
      <div class="flex bg-card justify-center pb-16">
        <div class="flex flex-col content-around mt-16 mr-16">
          <div class="mt-8 mb-6">
            <h2 class="font-bold text-purple text-3xl mb-4">
              كل ما تحتاجه لنمو متجرك في مكان واحد
            </h2>
            <h5 class="font-light">
              مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفاده من حلول
              وخدمات سوق تطبيقات زد لنمو متجرك ومضاعفه ارباحك
            </h5>
          </div>
          <div class="mb-16">
            <ul>
              <li class="flex mb-4 items-center">
                <div class="ml-4 bg-white p-2 rounded-full shadow-xl">
                  <img src="../assets/images/icon2.svg" alt="" />
                </div>
                <p class="text-sm">
                  دعم فني وتقني متاكمل متوفر على مدار الساعه
                </p>
              </li>
              <li class="flex mb-4 items-center">
                <div class="ml-4 bg-white p-2 rounded-full shadow-xl">
                  <img src="../assets/images/icon2.svg" alt="" />
                </div>
                <p class="text-sm">
                  اسعار تنافسيه مع تجربة مجانيه وباقات متنوعه
                </p>
              </li>
              <li class="flex mb-4 items-center">
                <div class="ml-4 bg-white p-2 rounded-full shadow-xl">
                  <img src="../assets/images/icon3.svg" alt="" />
                </div>
                <p class="text-sm">
                  اسعار تنافسيه مع تجربة مجانيه وباقات متنوعه
                </p>
              </li>
            </ul>
          </div>
          <div class="flex justify-center">
            <div
              class="
                w-72
                h-14
                bg-purple
                rounded-lg
                overflow-hidden
                flex
                justify-center
                items-center
              "
            >
              <div class="text-orange text-sm font-extrabold ml-3">
                تصفح التطبيقات
              </div>
              <div><img src="../assets/images/DownArrow.svg" alt="" /></div>
            </div>
          </div>
        </div>
        <figure class="flex items-center">
          <img src="../assets/images/apps-photo-2.png" alt="" />
        </figure>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script>
import Navbar from "../components/TheHeader/Navbar.vue";
import Footer from "../components/TheFooter/index.vue";
import AppCard from "../components/Cards/AppCard.vue";
export default {
  name: "Homepage",
  data() {
    return {
      cards: [
        {
          id: "1",
          appName: "قمرة",
          appImg: "../assets/images/qomra.png",
          numberOfStars: 5,
          developerName: "عمر برهوم",
          description: "نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك",
        },
        {
          id: "2",
          appName: "قمرة",
          appImg: "../../assets/images/qomra.png",
          numberOfStars: 5,
          developerName: "عمر برهوم",
          description: "نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك",
        },
        {
          id: "3",
          appName: "قمرة",
          appImg: "../../assets/images/qomra.png",
          numberOfStars: 5,
          developerName: "عمر برهوم",
          description: "نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك",
        },
        {
          id: "4",
          appName: "قمرة",
          appImg: "../../assets/images/qomra.png",
          numberOfStars: 5,
          developerName: "عمر برهوم",
          description: "نظام الولاء الامثل الذى يمكنك من رفع مبيعاتك",
        },
      ],
    };
  },
  components: { Navbar, Footer, AppCard },
};
</script>

<style lang="postcss" scoped></style>
