<?php require('header.php'); ?>

<?php
  // Connect to database
  $connect = mysqli_connect(
    'localhost',
    'admin',
    '5wmA8N5MUIXz10q4',
    'little_blog'
  );

  // Check connection status
  if(!$connect) {
    echo 'An error occurred...<br>';
    echo mysqli_connect_error();
  }

  // Write query of 'posts' table
  $query = 'SELECT title, author, body FROM posts ORDER BY time_created';

  // Make the query and get result
  $result = mysqli_query($connect, $query);

  // Fetch the result and format as array
  $posts = mysqli_fetch_all($result, MYSQLI_ASSOC);

  // Free up the result from memeory
  mysqli_free_result($result);

  // Close the database connection
  mysqli_close($connect);
?>

<?php 
  function trunc($phrase, $max_words) {
    $phrase_array = explode(' ',$phrase);
    if(count($phrase_array) > $max_words && $max_words > 0)
        $phrase = implode(' ',array_slice($phrase_array, 0, $max_words)).'...';
    return $phrase;
  }
?>

<main>
  <div class="container">
    <div class="row mt-4 mb-5">
      <h2>All Posts</h2>
      <div class="post-list col mt-4">
        <div class="row">
          <?php foreach($posts as $post): ?>
            <div class="post col-12 col-sm-6 col-lg-4 mb-4">
              <div class="card h-100">
                <div class="card-body">
                  <h5 class="card-title"><?php echo $post['title']; ?></h5>
                  <h6 class="card-subtitle mb-2 text-muted"><?php echo $post['author']; ?></h6>
                  <p class="card-text"><?php echo trunc($post['body'], 24); ?></p>
                  <a href="#" class="card-link">Read more</a>
                </div>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </div>
</main>

<?php require('footer.php'); ?>