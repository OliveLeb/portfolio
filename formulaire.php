<!--<link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"
    ></script>-->
    <?php
echo '
    <div class="container">
      <div class="divider"></div>

      <div class="heading">
        <h2>Contactez moi</h2>
      </div>

      <div class="row">
        <div class="col-lg-10 col-lg-offset-1 m-auto">
          <form id="contact-form" action="" method="POST" role="form">
            <div class="row" id="row">
              <div class="col-md-6">
                <label for="firstname"
                  >Prénom <span class="blue"> *</span>
                </label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  class="form-control"
                  placeholder="Votre prénom"
                  value =""                                   
                  required
                />
                <p class="comments text-danger"></p>
              </div>

              <div class="col-md-6">
                <label for="name">Nom <span class="blue"> *</span> </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  placeholder="Votre nom"
                  value =""
                  required
                />
                <p class="comments text-danger"></p>
              </div>

              <div class="col-md-6">
                <label for="email">Email <span class="blue"> *</span> </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  placeholder="Votre email"
                  value =""
                  required
                />
                <p class="comments text-danger"></p>
              </div>

              <div class="col-md-6">
                <label for="phone">Téléphone </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="form-control"
                  placeholder="Votre téléphone"
                  value =""
                />
                <p class="comments text-danger"></p>
              </div>

              <div class="col-md-12">
                <label for="message"
                  >Message <span class="blue"> *</span>
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="form-control"
                  placeholder="Votre message"
                  value =""
                  required
                ></textarea>
                <p class="comments text-danger"></p>
              </div>

              <div class="col-md-12">
                <p class="blue font-weight-bold">
                  * Ces informations sont requises.
                </p>
              </div>

              <div class="col-md-12">
                <input
                  type="submit"
                  class="btn btn-warning font-weight-bold"
                  value="Envoyer"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>';
?>