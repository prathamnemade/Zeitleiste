var mongoose = require('mongoose');
var Registration = mongoose.model('Registration');

module.exports.verifyEmail = function (req, res) {
  Registration.find({ 'email': req.query.email }, { 'registered': 1, '_id': 0 }).exec(function (err, checkAlreadyVerified) {
    if (checkAlreadyVerified[0].registered === 'N') {
      Registration.find({ 'email': req.query.email }, { 'registrationID': 1, '_id': 0 }).exec(
        function (err, data) {
          if (req.query.id == data[0].registrationID) {
            Registration.updateOne({ 'email': req.query.email }, { $set: { 'registered': 'Y' } }).exec(function (err, data) {
              if (data.nModified > 0) {
                res.end(`
                <div  style="display: inline-table !important;width: 30%;z-index: 10006;margin: auto;top: 0;bottom: 0;right: 0;left: 0;position: absolute; display: none;">
                <table  style="margin: 0px;border-collapse: collapse;">
                    <tbody>
                      <tr >
                          <td style="padding: 0px;">
                            <div style="border-width: 0px 1px 0px 1px;padding: 6px 6px 0px 6px;background: #DBDBBA;">
                                <div style="border: 1px solid #808080; padding: 6px; background: #FFFFFF;">
                                  Hi  <strong>${req.query.email}</strong> ,
                                  <p style="margin-left: 100px;"> Thank you for registering with 
                                  <strong>Zeitleiste<strong>.
                                  <br>
                                  Please visit our website to login.    </p>
                                  <div style="text-align: center;">
                                      <img src="https://img.icons8.com/color/48/000000/ok.png" alt="" width="50" height="50">
                                  </div>
                                </div>
                            </div>
                            <div  style="border-width: 0px 1px 1px 1px;padding: 0px 0px 0px 0px;background: #DBDBBA;height: 6px;text-align: right;"></div>
                          </td>
                      </tr>
                    </tbody>
                </table>
              </div>
                `);

              }
            })
          }
          else {
            
            res.end(`
            <div  style="display: inline-table !important;width: 30%;z-index: 10006;margin: auto;top: 0;bottom: 0;right: 0;left: 0;position: absolute; display: none;">
            <table  style="margin: 0px;border-collapse: collapse;">
                <tbody>
                  <tr >
                      <td style="padding: 0px;">
                        <div style="border-width: 0px 1px 0px 1px;padding: 6px 6px 0px 6px;background: #DBDBBA;">
                            <div style="border: 1px solid #808080; padding: 6px; background: #FFFFFF;">
                              Hi ,
                              <p style="margin-left: 50px;">Something went wrong !!
                              <br>Please try again.</p>
                              <div style="text-align: center;">
                                  <img src="https://img.icons8.com/color/48/000000/error.png" alt="" width="50" height="50">
                              </div>
                            </div>
                        </div>
                        <div  style="border-width: 0px 1px 1px 1px;padding: 0px 0px 0px 0px;background: #DBDBBA;height: 6px;text-align: right;"></div>
                      </td>
                  </tr>
                </tbody>
            </table>
          </div>
            `);



          }

        }
      )
    } else {
      res.end(`
                <div  style="display: inline-table !important;width: 30%;z-index: 10006;margin: auto;top: 0;bottom: 0;right: 0;left: 0;position: absolute; display: none;">
                <table  style="margin: 0px;border-collapse: collapse;">
                    <tbody>
                      <tr >
                          <td style="padding: 0px;">
                            <div style="border-width: 0px 1px 0px 1px;padding: 6px 6px 0px 6px;background: #DBDBBA;">
                                <div style="border: 1px solid #808080; padding: 6px; background: #FFFFFF;">
                                  Hi  <strong>${req.query.email}</strong> ,
                                  <p style="margin-left: 100px;">You have already registered with us.
                                  <br> Thank you for registering with 
                                  <strong>Zeitleiste<strong>.
                                  <br>
                                  Please visit our website to login.    </p>
                                  <div style="text-align: center;">
                                      <img src="https://img.icons8.com/windows/32/000000/comedy.png" alt="" width="50" height="50">
                                  </div>
                                </div>
                            </div>
                            <div  style="border-width: 0px 1px 1px 1px;padding: 0px 0px 0px 0px;background: #DBDBBA;height: 6px;text-align: right;"></div>
                          </td>
                      </tr>
                    </tbody>
                </table>
              </div>
                `);
    }
  })


}