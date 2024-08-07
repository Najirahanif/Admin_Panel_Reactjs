import Charts from "../components/chart";
function Main() {
  
    return (
        <>
        <div>
            <h4>Dashboard</h4>
            {/* Dashboard row1 Starts */}
            <div className="row pt-3">
                <div class="col-md-8 grid-margin stretch-card">
                    <div className="row">
                    <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                    <div class="card  pb-2 mb-1">
                      <div class="card-body">
                        <div class="row preview-item ">
                          <div class="col-9 ">
                            <div class="mb-2">
                                <div class="icon icon-box-success ">
                                <i class="fa fa-shopping-cart"></i>
                                </div>
                            </div>
                            <p>Total Orders</p>
                            <div class="order d-flex align-items-center align-self-start">
                              <h3 class="mb-0">75</h3>
                              <i class="fa fa-caret-up ms-5" aria-hidden="true"></i>
                              <p class="text-success ms-2 pl-2 mt-3 font-weight-medium">3%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card pb-2 mb-1">
                  <div class="card-body ">
                    <div class="row preview-item">
                      <div class="col-9">
                        <div class="mb-2">
                            <div class="icon icon-box-secondary">
                            <i class="fa fa-shopping-bag"></i>
                            </div>
                        </div>
                        <p>Total Delivered</p>
                        <div class="order1 d-flex align-items-center align-self-start">
                          <h3 class="mb-0">70</h3>
                          <i class="fa fa-caret-up ms-5" aria-hidden="true"></i>
                          <p class="text-success ms-2 pl-2 mt-3 font-weight-medium">3%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card  pb-2 mb-1">
                  <div class="card-body">
                    <div class="row preview-item">
                      <div class="col-9">
                      <div class="mb-2">
                          <div class="icon icon-box-danger">
                          <i class="fa fa-shopping-bag"></i>
                          </div>
                      </div>
                      <p>Total Cancelled</p>
                      <div class="order d-flex align-items-center align-self-start">
                          <h3 class="mb-0">05</h3>
                          <i class="fa fa-caret-up ms-5" aria-hidden="true"></i>
                          <p class="text-success ms-2 pl-2 mt-3 font-weight-medium">3%</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div class="card pb-2 mb-1">
                  <div class="card-body">
                    <div class="row preview-item">
                      <div class="col-9">
                      <div class="mb-2">
                          <div class="icon icon-box-revenue ">
                          <i class="fa fa-money"></i>
                          </div>
                      </div>
                      <p>Total Revenue</p>
                      <div class="order1 d-flex align-items-center align-self-start">
                          <h3 class="mb-0">$9k</h3>
                          <i class="fa fa-caret-up ms-5" aria-hidden="true"></i>
                          <p class="text-success ms-2 pl-2 mt-3 font-weight-medium">3%</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
                </div>
                <div class="col-md-4 mb-1 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <p>Net Profit</p>
                    <div class="row preview-item">
                      <div class="col-6 col-sm-12 col-xl-8 my-auto">
                        <div class="d-flex mt-2 mb-2 d-sm-block d-md-flex align-items-center">
                          <h3 class="mb-0 ms-0">$6759.25</h3>
                        </div>
                        <div class="order d-flex align-items-center align-self-start">
                          <i class="fa fa-caret-up " aria-hidden="true"></i>
                          <p class="text-success ms-2 font-weight-medium">3%</p>
                        </div>
                      </div>
                      <div class="col-6 col-sm-12 col-xl-4 text-center text-xl-right">
                        <div class="flex-wrapper">
                          <div class="single-chart">
                            <svg viewBox="0 0 36 36" class="circular-chart blue">
                              <path class="circle-bg"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <path class="circle"
                                strokeDasharray="70, 100"
                                d="M18 2.0845
                                  a 15.9155 15.9155 0 0 1 0 31.831
                                  a 15.9155 15.9155 0 0 1 0 -31.831"
                              />
                              <text x="18" y="20.35" class="percentage" textAnchor="middle">70%</text>
                              <text x="18" y="26" class="percentage-text">Goal Completed</text>
                            </svg>
                          </div>
                        </div>
                        <p class="circle-percentage-text">*This value here has been rounded off</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            {/* Dashboard row1 ends */}
            {/* Dashboard row2 Starts */}
            <div className="row pt-3">
              <div class="col-md-8 grid-margin stretch-card">
                <div className="chart mb-1">
                  <h6>Activity</h6>
                  <Charts/>
                </div>
              </div>
              <div class="col-md-4 mb-2 grid-margin stretch-card">
                <div id="aim">
                    <div className="preview-list p-3">
                      <div class="preview-item border-bottom">
                        <div class="preview-thumbnail">
                          <div class="preview-icon icon-box-secondary">
                            <i class="fa fa-dot-circle-o"></i>
                          </div>
                        </div>
                        <div class="row preview-item-content d-sm-flex flex-grow-1">
                          <div class="col-10 col-sm-12 col-xl-8 my-auto">
                            <h5 class="preview-subject">Goals</h5>
                          </div>
                          <div class="col-2 col-sm-12 col-xl-4 text-end">
                            <i class="fa fa-caret-right mb-0" aria-hidden="true"></i>
                          </div>
                        </div>
                      </div>

                        <div class="preview-item border-bottom">
                            <div class="preview-thumbnail">
                              <div class="preview-icon icon-box-success">
                                <i class="fa fa-cutlery"></i>
                              </div>
                            </div>
                            <div class="row preview-item-content d-sm-flex flex-grow-1">
                              <div class="col-10 col-sm-12 col-xl-8 my-auto">
                                <h5 class="preview-subject">Dishes</h5>
                              </div>
                              <div class="col-2 col-sm-12 col-xl-4 text-end">
                                <i class="fa fa-caret-right mb-0" aria-hidden="true"></i>
                              </div>
                            </div>
                        </div>
                        <div class="preview-item border-bottom">
                            <div class="preview-thumbnail">
                              <div class="preview-icon icon-box-primary">
                                <i class="fa fa-chevron-circle-down"></i>
                              </div>
                            </div>
                            <div class="row preview-item-content d-sm-flex flex-grow-1">
                              <div class="col-10 col-sm-12 col-xl-8 my-auto">
                                <h5 class="preview-subject">Menus</h5>
                              </div>
                              <div class="col-2 col-sm-12 col-xl-4 text-end">
                                <i class="fa fa-caret-right mb-0" aria-hidden="true"></i>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            {/* Dashboard row2 Ends */}
            {/* Dashboard row3 Starts */}
            <div className="row pt-3">
              <div class="col-md-8 grid-margin stretch-card mb-1">
                <div id="table">
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Order Status</h5>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th> Client Name </th>
                            <th> Order No </th>
                            <th> Product Cost </th>
                            <th> Payment Status </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <img src="assets/images/face1.jpg" alt="image" />
                              <span class="ps-2">Cody Fisher</span>
                            </td>
                            <td> 23302312 </td>
                            <td> $13.500 </td>
                            <td>
                              <div class="badge badge-outline-success">Delivered</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/face2.jpg" alt="image" />
                              <span class="ps-2">Guy Hawkins</span>
                            </td>
                            <td> 23402312 </td>
                            <td> $12.20 </td>
                            <td>
                              <div class="badge badge-outline-success">Delivered</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/face3.jpg" alt="image" />
                              <span class="ps-2">Lucy Abbott</span>
                            </td>
                            <td> 54802312 </td>
                            <td> $1.500 </td>
                            <td>
                              <div class="badge badge-outline-danger">Cancelled</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/face4.jpg" alt="image" />
                              <span class="ps-2">Peter Gill</span>
                            </td>
                            <td> 78402312 </td>
                            <td> $14.500 </td>
                            <td>
                              <div class="badge badge-outline-warning">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/face5.jpg" alt="image" />
                              <span class="ps-2">Sallie Reyes</span>
                            </td>
                            <td> 45602312 </td>
                            <td> $14.500 </td>
                            <td>
                              <div class="badge badge-outline-success">Delivered</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <img src="assets/images/face6.jpg" alt="image" />
                              <span class="ps-2">Jane Cooper</span>
                            </td>
                            <td> 87602312 </td>
                            <td> $11.20 </td>
                            <td>
                              <div class="badge badge-outline-success">Delivered</div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div class="col-md-4 grid-margin stretch-card">
                <div id="feedback">
                  <div class="card">
                    <div class="card-body">
                      <h4 class="card-title mb-3">Customer's Feedback</h4>
                      <div class="mb-3">
                        <img src="assets/images/face1.jpg" alt="image" />
                        <span class="ps-3">Jenny Wilson</span>
                        <div class="mt-1" >
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star failure" aria-hidden="true"></i>
                        </div>
                        <small class="card-text">Vitalii assembled the IKEA Norli drawer chest for me in less than 30 minutes, and he assembled a metal wire shelving unit as well in about 10 minutes.</small>
                      </div>
                      <div class="mb-3">
                        <img src="assets/images/face5.jpg" alt="image" />
                        <span class="ps-3">Dianne Russel</span>
                        <div class="mt-1" >
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                        </div>
                        <small class="card-text">Vitalii assembled the IKEA Norli drawer chest for and he assembled a metal wire shelving unit as well in about 10 minutes.</small>
                      </div>
                      <div>
                        <img src="assets/images/face8.jpg" alt="image" />
                        <span class="ps-3">Devonne Lane</span>
                        <div class="mt-1" >
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star success" aria-hidden="true"></i>
                          <i class="fa fa-star failure" aria-hidden="true"></i>
                        </div>
                        <small class="card-text">Vitalii assembled the IKEA Norli drawer chest for me in less and he assembled a metal wire  </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Dashboard row3 Ends */}
        </div>
        
        </>
    );
    
}
export default Main;