import React from "react";
import "./Footer.css";
import FooterList from "./FooterList";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="footer-info">
					<p>
						1. Price includes a $30 AT&T, T-Mobile, Sprint, or
						Verizon discount. Monthly pricing: Available to
						qualified customers and requires 0% APR, 24-month
						installment loan when you select Citizens One or Apple
						Card Monthly Installments (ACMI) as payment type at
						checkout at Apple. iPhone activation required with AT&T,
						T-Mobile, Sprint, or Verizon for purchases made with
						ACMI at an Apple Store. Subject to credit approval and
						credit limit. Taxes and shipping not included.
						Additional Apple Card Monthly Installments terms are in
						the Customer Agreement. Additional iPhone Payments terms
						are here. ACMI is not available for purchases made
						online at special storefronts. The last month’s payment
						for each product will be the product's purchase price,
						less all other payments at the monthly payment amount.
					</p>
					<p>
						2. $9.99/month after free trial. No commitment. Plan
						automatically renews after trial until cancelled.
					</p>
					<p>
						3. Qualified Purchasers receive Promotion Savings when
						they purchase an eligible Mac or eligible iPad with
						eligible AirPods at a Qualifying Location. Only one
						Promotion Product per eligible Mac or eligible iPad per
						Qualified Purchaser. Offer subject to availability.
						While supplies last. Qualified Purchasers selecting
						Apple Card Monthly Installments (“ACMI”) as payment type
						at checkout shall receive a discount equal to the value
						of the eligible AirPods off the price of the eligible
						Mac or iPad. This will result in one ACMI installment
						plan over 12 months for the eligible iPad or Mac
						discounted by the instant credit, and a second ACMI
						installment plan over 6 months for the full price of the
						eligible AirPods. Qualified Purchasers will be charged
						for all items in their cart, including the eligible
						AirPods plus any additional Upgrade Cost. If you choose
						the pay-in-full or one-time-payment option for an ACMI
						eligible purchase instead of choosing ACMI as the
						payment option at checkout, that purchase will be
						subject to the variable APR assigned to your Apple Card.
						Taxes and shipping are not included in ACMI transactions
						and are subject to your standard purchase APR. ACMI is
						subject to credit approval and credit limit. Variable
						APRs for Apple Card other than ACMI range from 10.99% to
						21.99% based on creditworthiness. Rates as of April 1,
						2020. See the Apple Card Customer Agreement for more
						information. Apple Card is issued by Goldman Sachs Bank
						USA, Salt Lake City Branch. Available for qualifying
						applicants in the United States. If you reside in the
						U.S. territories, please call Goldman Sachs at
						877-255-5923 with questions about accessing this offer
						or applying for Apple Card. This offer cannot be
						combined with the Apple Employee Purchase Plan or
						business loyalty pricing. Availability of in-store
						promotion offerings may be limited by Apple Store
						location closures as a result of COVID-19. Additional
						restrictions apply. View full terms and conditions of
						offer here.
					</p>
					<p>
						4. New subscribers only. Plan automatically renews at
						$4.99/month after trial until cancelled. Terms apply.
					</p>
					<p>
						5. Purchase must be made on apple.com, through the Apple
						Store app, or at an Apple Store in the U.S. Limited to
						the first 100,000 transactions. Subject to $10 minimum
						purchase. Promotion ends August 29.
					</p>
					<p>
						To access and use all the features of Apple Card, you
						must add Apple Card to Wallet on an iPhone or iPad with
						the latest version of iOS or iPadOS. Update to the
						latest version by going to Settings > General > Software
						Update. Tap Download and Install.
					</p>
					<p>
						Available for qualifying applicants in the United
						States.
					</p>
					<p>
						Apple Card is issued by Goldman Sachs Bank USA, Salt
						Lake City Branch.
					</p>
					<p>
						Learn more about how Apple Card applications are
						evaluated at{" "}
						<a href="">support.apple.com/kb/HT209218</a> .
					</p>
					<p>
						Apple TV+ is $4.99/month after free trial. One
						subscription per Family Sharing group. Offer good for 3
						months after eligible device activation. Plan
						automatically renews until cancelled. Restrictions and
						other terms apply.
					</p>
				</div>
				<FooterList />

				<div className="footer-contact">
					<p>
						More ways to shop: <a href="">Find an Apple Store</a> or{" "}
						<a href="">other retailer</a> near you. Or call
						1-800-MY-APPLE.
					</p>
				</div>
				<div className="footer-copy">
					<div className="invisible">
						<a href="">United States</a>
					</div>
					<div>
						<p>Copyright © 2021 Apple Inc. All rights reserved.</p>
						<span>
							<a href="">Privacy Policy</a>
							<a href="">Terms of Use</a>
							<a href="">Sales and Refunds</a>
							<a href="">Legal</a> <a href="">Site Map</a>
						</span>
					</div>
					<span>
						<a href="">United States</a>
					</span>
				</div>
			</div>
		</div>
	);
};

export default Footer;
