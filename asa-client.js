!function() {
  var ASA = {
    version: "0.0.1",
    appId: '',
    token: ''
  };


  /**
  * ASA client init
  * @param appId: string, then app name sign up
  * @param token: string, obtain from asa.gausian.com/authenticate when you sign up your app
  * @return: error message if any failure, empty if success
  */
  ASA.init = function(appId, token) {

    ASA.appId = appId;
    ASA.token = token;
    //TBD: authenticate
    console.log('token: ' + token + ', APP Name: ' + appId);

    return '';
  };


  /**
  * ASA client request function
  * @param appId: string, then app name sign up
  * @param token: string, obtain from asa.gausian.com/authenticate when you sign up your app
  */
  ASA.request = function (string, callback) {
    $.ajax({
      url: 'http://asa.gausian.com',
      type: 'POST',
      data: {
        'user_app_id': ASA.appId,
        'service_app_name': 'CustomerDataReadWrite',
        'request_string': 'get:all'
      }
    }).done(function (data) {
      console.log(data);
      callback(data, null);
    }).error(function (error) {
      console.log(error);
      callback(null, error);
    });
  };

}).call(this);
