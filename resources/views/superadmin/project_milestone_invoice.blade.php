<!-- Start Invoice Wraper -->
<div class="bg-white box-shadow-6 pt-26 pb-30 bd-r-5">
    <section class="invoice-wrap">
        <div class="container">
            <div class="invoice-header">
                <h4 class="title">{{ get_phrase('INVOICE') }}</h4>
            </div>
            <div class="invoice-body">
            <!-- Info items -->
                <div class="invoice-items">
                    <div class="invoice-item">
                        <div class="invoice-info">
                            <h5 class="title">{{ get_phrase('Bill to').' '.$milestone_details->paymentMilestone_to_user->name}}</h5>
                            <p class="info">
                            {{ $milestone_details->paymentMilestone_to_user->email }}
                            </p>
                            <p class="info">
                            {{ $milestone_details->paymentMilestone_to_user->phone }}
                            </p>
                        </div>
                    </div>
                    <div class="invoice-item">
                        <div class="company-logo">
                            <img src="{{ asset('assets/img/logo-invoice.png') }}" alt="" />
                        </div>
                    </div>
                    <div class="invoice-item">
                        <div class="invoice-info">
                            <h5 class="title">{{ get_phrase('Milestone Invoice No') }}</h5>
                            <p class="info">#{{ $milestone_details->id }}</p>
                        </div>
                        <div class="invoice-info">
                            <h5 class="title">{{ get_phrase('Date') }}</h5>
                            <p class="info">{{ date_format($milestone_details->updated_at,'d M, Y') }}</p>
                        </div>
                        <div class="invoice-info">
                            <span class="paid">{{ get_phrase('Paid').' - '.currency($milestone_details->amount) }}</span>
                        </div>
                    </div>
                </div>
                <!-- Table -->
                <table class="table eTable el-table invoice-table">
                    <!-- Table Head -->
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">{{ get_phrase('Date') }}</th>
                            <th scope="col">{{ get_phrase('Item') }}</th>
                            <th scope="col">{{ get_phrase('Price') }}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="dl_property_id">
                                    <p>1</p>
                                </div>
                            </td>
                            <td>
                                <div class="dl_property_price">
                                    <p>{{ date_format($milestone_details->updated_at,'d M, Y') }}</p>
                                </div>
                            </td>
                            <td>
                                <div class="dl_property_id">
                                    <p>{{ $milestone_details->PaymentMilestone_to_project->title }}</p>
                                </div>
                            </td>
                            <td>
                                <div class="dl_property_price">
                                    <p>{{ currency($milestone_details->amount) }}</p>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table class="table eTable el-table invoice-table ms-auto max-w-332">
                    <tbody>
                        <tr>
                            <td>
                            <div class="dl_property_price">
                                <p>{{ get_phrase('Subtotal') }}</p>
                            </div>
                            </td>
                            <td>
                            <div class="dl_property_id">
                                <p>{{ currency($milestone_details->amount) }}</p>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <div class="dl_property_price">
                                <p>{{ get_phrase('Offer') }}</p>
                            </div>
                            </td>
                            <td>
                            <div class="dl_property_id">
                                <p>%00</p>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="invoice-grand-total max-w-358 ms-auto">
                    <p>{{ get_phrase('Grand Total') }}</p>
                    <p>{{ currency($milestone_details->amount) }}</p>
                </div>
            </div>
        </div>
    </section>
    <!-- End Invoice Wraper -->
</div>