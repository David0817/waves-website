##  博客打包文件
###  程序包
-   testb.lllll.tech.tar.gz （解压到一个新建的文件夹内，里面包含2部分）
-     一部分是已安装博客代码文件
-     一部分是WordPress源码备份一份
####  程序内api添加代码
-   位置  wp-content/themes/blossom-feminine/functions.php
-   code  (获取特色图片)
```php
  function dw_rest_prepare_post( $data, $post, $request ) {

   $_data = $data->data;

   $params = $request->get_params();

   if (has_post_thumbnail($data)) {
      //如果有特色缩略图，则输出缩略图地址
      $image = wp_get_attachment_image_src( get_post_thumbnail_id($_data['id']), 'full' );
      $post_thumbnail_src = $image[0];
   } else {
      @$output            = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);
      if (!empty($matches[1][0])) {
         global $wpdb;
         $att = $wpdb->get_row($wpdb->prepare("SELECT ID,guid FROM $wpdb->posts WHERE guid LIKE '%s'", $matches[1][0]));
         if ($att) {
            $post_thumbnail_src = $att->guid;
         } else {
            $post_thumbnail_src = $matches[1][0];
         }
      } else {
         // 默认图片路径
         $post_thumbnail_src = null;
      }
   }
   $_data['thumbnailurl'] = $post_thumbnail_src;

   // if ( ! isset( $params['id'] ) ) {

   //unset( $_data['excerpt'] );

   //unset( $_data['author'] );

   unset( $_data['featured_media'] );

   unset( $_data['format'] );

   unset( $_data['ping_status'] );

   unset( $_data['comment_status'] );

   unset( $_data['sticky'] );

   unset( $_data['template'] );

   // }

   $data->data = $_data;

   return $data;

}
add_filter( 'rest_prepare_post', 'dw_rest_prepare_post', 10, 3 );
```
###  博客数据库备份
-   testb_lllll_tech_20200714_101126.sql.gz
-   数据库名  testb_lllll_tech
-   用户名    testb_lllll_tech
-   密码      iH5TFKZynaf4SwXZ

### 博客后台
- 地址  http://testb.lllll.tech/wp-admin/
- 账户  admin
- 密码  Y8x3VsyYSUxCjuRGu3