<template>
  <div class="m-4 pb-3">
    <!-- eslint-disable-next-line -->
    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="3PT5FP247TBA4" />
      <!-- eslint-disable-next-line -->
      <input
        type="image"
        src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
        border="0"
        name="submit"
        title="PayPal - The safer, easier way to pay online!"
        alt="Donate with PayPal button"
      />
      <!-- eslint-disable-next-line -->
      <img alt border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1">
    </form>
    <!-- eslint-disable-next-line -->
    <a
      target="_blank"
      href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3PT5FP247TBA4&source=url"
    >
    </a>
  </div>
</template>
