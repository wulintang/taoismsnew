<template>
  <ParentLayout>
    <template #sidebar-top>
      <div class="sidebar-links">
          <div class="ad">
          广告A位 <a href="/about/#%E5%B9%BF%E5%91%8A%E8%B5%9E%E5%8A%A9" rel="noopener noreferrer">赞助请点击</a>
          </div>
      </div>
    </template>
    <template #sidebar-bottom>
      <div class="sidebar-links">
          <div class="ad">
          广告B位 <a href="/about/#%E5%B9%BF%E5%91%8A%E8%B5%9E%E5%8A%A9" rel="noopener noreferrer">赞助请点击</a>
          </div>
      </div>
    </template>
    <template #page-top>
      <div class="theme-default-content">
      <div class="ad">
          广告c位 <a href="/about/#%E5%B9%BF%E5%91%8A%E8%B5%9E%E5%8A%A9" rel="noopener noreferrer">赞助请点击</a>
          </div>
      </div>
      </div>
    </template>
    <template #page-bottom>
      <div class="theme-default-content">
     <div class="ad">
          广告d位 <a href="/about/#%E5%B9%BF%E5%91%8A%E8%B5%9E%E5%8A%A9" rel="noopener noreferrer">赞助请点击</a>
          </div>
      </div>
      <Vssue class="theme-default-content content__default" :options="{ locale: 'zh' }">
<script>
  cardLink.server = 'https://cardlink-server.deta.dev/?url=' ;
  cardLink(document.querySelectorAll('a[target=_blank].url,.external_link_security_jump'))
</script>
    </template>
  </ParentLayout>
</template>
<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
export default {
  name: 'Layout',
  components: {
    ParentLayout
  }
}
</script>
