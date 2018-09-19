function delete_custom_field(){
    var_dump(get_post_meta($_POST['post_id']));
    $response->status = '';
    foreach( $_POST['keys'] as $key){
        $response->status .= $key.': '. delete_post_meta($_POST['post_id'], $key) .', ';
        $response->status .= $key.': '. delete_post_meta($_POST['post_id'], '_'.$key) .', ';
    }
    wp_send_json($response, 200);
}

add_action('wp_ajax_delete_custom_field', 'delete_custom_field');
