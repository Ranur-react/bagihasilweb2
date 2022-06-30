import React, { Component } from "react";

class index extends Component {
  render() {
    return (
      <div>
        {/* Main Wrapper */}
        <div id="wrapper">
          <div className="content content-boxed">
            <div className="row">
              <div className="col-lg-12">
                <div className="hpanel blog-article-box">
                  <div className="panel-heading">
                    <h4>Maecenas placerat facilisis </h4>
                    <small>
                      There are many variations of passages of Lorem Ipsum
                      available
                    </small>
                    <div className="text-muted small">
                      Created by: <span className="font-bold">Mike Smith</span>
                      21.03.2015, 06:45 pm
                    </div>
                  </div>
                  <div className="panel-body">
                    <p>
                      Maecenas placerat facilisis interdum. Mauris eu dolor
                      nisi. Suspendisse ullamcorper purus nec nibh maximus, ut
                      sollicitudin enim venenatis. Nullam interdum, odio sit
                      amet dapibus mollis, ligula diam pretium sapien, eget
                      suscipit felis ipsum sed lorem. <br />
                      <br /> Cum sociis natoque penatibus et magnis dis
                      parturient montes, nascetur ridiculus mus. Curabitur
                      ultrices aliquam nisi, vel semper augue auctor eu.
                      Pellentesque a sollicitudin tellus. Aenean posuere
                      pharetra ipsum, ornare pretium lorem convallis non.
                      Vivamus ac sodales sem. Nunc congue dolor ut dui maximus,
                      imperdiet sollicitudin velit auctor. Integer tincidunt
                      iaculis vehicula. Nunc faucibus orci non imperdiet
                      ultricies. Nunc pellentesque dui nisi, vel convallis quam
                      malesuada ornare. Nunc ac purus velit. Cras aliquet porta
                      sodales. Proin blandit ornare bibendum.
                    </p>
                    <br />
                    <blockquote className="pull-left" style={{ maxWidth: 250 }}>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </blockquote>
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum...
                    </p>
                    <br />
                    <p>
                      Duis rutrum felis at lorem scelerisque, vel iaculis risus
                      viverra. Integer sed gravida libero. Maecenas sit amet
                      lacus et erat rhoncus sodales quis non nunc. Morbi in
                      mattis massa. Pellentesque habitant morbi tristique
                      senectus et netus et malesuada fames ac turpis egestas.
                      Phasellus bibendum posuere sapien eget vehicula. Nulla sit
                      amet laoreet ante, sed ornare mauris. In interdum ex et
                      leo suscipit sagittis. Pellentesque ac eleifend quam. Nam
                      eu lacinia lacus. Vestibulum lacinia nisl lectus,
                      fringilla molestie diam imperdiet dignissim.
                    </p>
                    <p>
                      In scelerisque urna ut neque imperdiet, sit amet pretium
                      eros suscipit. Cras efficitur ante sit amet mi porta,
                      varius volutpat nulla hendrerit. Pellentesque nec risus
                      malesuada, scelerisque libero at, lacinia magna. Aliquam
                      tellus nunc, viverra in ipsum sed, tristique finibus nibh.
                      Proin gravida lobortis erat, nec aliquam lorem eleifend
                      eget. Integer quis augue id felis ultricies finibus.
                      Curabitur et ligula mauris. Suspendisse vel fringilla
                      quam. Quisque quis metus rhoncus, eleifend leo in,
                      sagittis libero. Vestibulum ante ipsum primis in faucibus
                      orci luctus et ultrices posuere cubilia Curae; Fusce
                      ullamcorper nisl risus, a scelerisque dui hendrerit nec.
                    </p>
                    <br />
                    <blockquote
                      className="pull-right"
                      style={{ maxWidth: 250 }}
                    >
                      <p>Fusce ac tellus eu nisl lobortis maximus</p>
                    </blockquote>
                    <p>
                      Praesent eget euismod nibh. Fusce ac tellus eu nisl
                      lobortis maximus ac eget sapien. Nulla malesuada mauris
                      non nulla imperdiet ullamcorper.
                    </p>
                    <br />
                    <p>
                      Sed porta libero metus, nec feugiat enim pharetra vel. Sed
                      vel sagittis augue. Donec hendrerit nibh ac dolor
                      lobortis, eu varius odio sollicitudin. Proin non
                      condimentum nulla, quis dictum leo. Vestibulum lobortis
                      urna eu mauris viverra porttitor. Cras consequat leo
                      condimentum lacus viverra sollicitudin. Donec dignissim
                      ornare est, nec scelerisque purus mollis eu. Phasellus
                      dictum suscipit ligula. Donec malesuada gravida velit.
                      Nulla egestas diam in ligula mollis, nec tincidunt diam
                      porta. Proin eleifend lacinia diam quis pretium. Sed
                      lacinia varius nisi et euismod. Ut ac arcu vulputate,
                      porta nibh non, ultricies erat. Nulla facilisi.
                    </p>
                  </div>
                  <div className="panel-footer">
                    <span className="pull-right">
                      <i className="fa fa-comments-o"> </i> 22 comments
                    </span>
                    <i className="fa fa-eye"> </i> 142 views
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right sidebar */}
          <div id="right-sidebar" className="animated fadeInRight">
            <div className="p-m">
              <button
                id="sidebar-close"
                className="right-sidebar-toggle sidebar-button btn btn-default m-b-md"
              >
                <i className="pe pe-7s-close" />
              </button>
              <div>
                <span className="font-bold no-margins"> Analytics </span>
                <br />
                <small>
                  {" "}
                  Lorem Ipsum is simply dummy text of the printing simply all
                  dummy text.
                </small>
              </div>
              <div className="row m-t-sm m-b-sm">
                <div className="col-lg-6">
                  <h3 className="no-margins font-extra-bold text-success">
                    300,102
                  </h3>
                  <div className="font-bold">
                    98% <i className="fa fa-level-up text-success" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h3 className="no-margins font-extra-bold text-success">
                    280,200
                  </h3>
                  <div className="font-bold">
                    98% <i className="fa fa-level-up text-success" />
                  </div>
                </div>
              </div>
              <div className="progress m-t-xs full progress-small">
                <div
                  style={{ width: "25%" }}
                  aria-valuemax={100}
                  aria-valuemin={0}
                  aria-valuenow={25}
                  role="progressbar"
                  className=" progress-bar progress-bar-success"
                >
                  <span className="sr-only">35% Complete (success)</span>
                </div>
              </div>
            </div>
            <div className="p-m bg-light border-bottom border-top">
              <span className="font-bold no-margins"> Social talks </span>
              <br />
              <small>
                {" "}
                Lorem Ipsum is simply dummy text of the printing simply all
                dummy text.
              </small>
              <div className="m-t-md">
                <div className="social-talk">
                  <div className="media social-profile clearfix">
                    <a className="pull-left">
                      <img src="images/a1.jpg" alt="profile-picture" />
                    </a>
                    <div className="media-body">
                      <span className="font-bold">John Novak</span>
                      <small className="text-muted">21.03.2015</small>
                      <div className="social-content small">
                        Injected humour, or randomised words which don't look
                        even slightly believable.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-talk">
                  <div className="media social-profile clearfix">
                    <a className="pull-left">
                      <img src="images/a3.jpg" alt="profile-picture" />
                    </a>
                    <div className="media-body">
                      <span className="font-bold">Mark Smith</span>
                      <small className="text-muted">14.04.2015</small>
                      <div className="social-content">
                        Many desktop publishing packages and web page editors.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="social-talk">
                  <div className="media social-profile clearfix">
                    <a className="pull-left">
                      <img src="images/a4.jpg" alt="profile-picture" />
                    </a>
                    <div className="media-body">
                      <span className="font-bold">Marica Morgan</span>
                      <small className="text-muted">21.03.2015</small>
                      <div className="social-content">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-m">
              <span className="font-bold no-margins"> Sales in last week </span>
              <div className="m-t-xs">
                <div className="row">
                  <div className="col-xs-6">
                    <small>Today</small>
                    <h4 className="m-t-xs">
                      $170,20 <i className="fa fa-level-up text-success" />
                    </h4>
                  </div>
                  <div className="col-xs-6">
                    <small>Last week</small>
                    <h4 className="m-t-xs">
                      $580,90 <i className="fa fa-level-up text-success" />
                    </h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-6">
                    <small>Today</small>
                    <h4 className="m-t-xs">
                      $620,20 <i className="fa fa-level-up text-success" />
                    </h4>
                  </div>
                  <div className="col-xs-6">
                    <small>Last week</small>
                    <h4 className="m-t-xs">
                      $140,70 <i className="fa fa-level-up text-success" />
                    </h4>
                  </div>
                </div>
              </div>
              <small>
                {" "}
                Lorem Ipsum is simply dummy text of the printing simply all
                dummy text. Many desktop publishing packages and web page
                editors.
              </small>
            </div>
          </div>
          {/* Footer*/}
          <footer className="footer">
            <span className="pull-right">Example text</span>
            Company 2015-2020
          </footer>
        </div>
      </div>
    );
  }
}

export default index;
