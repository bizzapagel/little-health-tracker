<?php require('header.php'); ?>

<?php
  $errors = [
    'postTitle' => '',
    'postAuthor' => '',
    'postBody' => ''
  ];

  if(isset($_POST['submit'])) {

    if(!empty($_POST['post-title'])) {
      $postTitle = htmlspecialchars($_POST['post-title']);
    } else {
      $errors['postTitle'] = '
        <div class="error alert alert-danger mt-2 py-1 px-2">
          <p class="small m-0">A title is required.</p>
        </div>
      ';
    }
    
    if(!empty($_POST['post-author'])) {
      $postAuthor = htmlspecialchars($_POST['post-author']);
    } else {
      $errors['postAuthor'] = '
        <div class="error alert alert-danger mt-2 py-1 px-2">
          <p class="small m-0">An author is required.</p>
        </div>
      ';
    }    

    if(!empty($_POST['post-body'])) {
      $postBody = htmlspecialchars($_POST['post-body']);
    } else {
      $errors['postBody'] = '
        <div class="error alert alert-danger mt-2 py-1 px-2">
          <p class="small m-0">A body is required.</p>
        </div>
      ';
    }

    if(array_filter($errors)) {
      // An error occurred
    } else {
      // No errors occurred
      // Save data to the database


      // Redirect user back to home page
      header('Location: index.php');
    }
  }
?>

<main>
  <div class="container">
    <div class="row mt-4 mb-5">
      <h2>New Post</h2>
      <div class="post-form">
        <form action="new.php" method="POST" class="mt-4">
          <div class="form-floating mb-3">
            <input type="text" name="post-title" id="post-title" class="form-control" placeholder="Post Title" value="<?php echo $postTitle; ?>">
            <label for="post-title">Post Title *</label>
            <?php echo $errors['postTitle']; ?>
          </div>
          <div class="form-floating mb-3">
            <input type="text" name="post-author" id="post-author" class="form-control" placeholder="Post Author" value="<?php echo $postAuthor; ?>">
            <label for="post-author">Post Author *</label>
            <?php echo $errors['postAuthor']; ?>
          </div>
          <div class="form-floating mb-3">
            <textarea name="post-body" id="post-body" class="form-control" placeholder="Post Body" style="height: 200px"><?php echo $postBody; ?></textarea>
            <label for="post-body">Post Body *</label>
            <?php echo $errors['postBody']; ?>
          </div>
          <div class="mb-3">
            <input type="submit" name="submit" value="Submit" class="btn btn-primary">
          </div>
        </form>
      </div>

    </div>
  </div>
</main>

<?php require('footer.php'); ?>