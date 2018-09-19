jQuery(document).ready(function($){
  if (jQuery('.inside')[0]) {    
	jQuery('div[data-field_name="[TRIGGERFIELD]"] input').click(function(){
      var keys = [];
      jQuery('.acf-conditional_logic-hide').each(function(){
        keys.push(jQuery(this).attr('data-field_name'));
      }); 
      var post_id = jQuery('#post_ID').val();
      jQuery.ajax({
        type: "POST",
        url: '[WP_HOST]/wp-admin/admin-ajax.php',
        data: {
          action: 'delete_custom_field',
          keys: keys,
          post_id: post_id
        },
        dataType: 'json',
        success: function(data){
         console.log(data);
        }
      });
    });
  }
});
