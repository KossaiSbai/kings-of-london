import React, {
    Component
} from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import Logo from '../topBar/logo';

ReactGA.initialize('UA-112834002-1');

const Container = styled.div `
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    color: #555;
    font-family: 'Exo 2', sans-serif;
    overflow-y: scroll;
    background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);
`;

const FAQ = styled.div `
    padding: 30px;
    border-radius: 2px;
    margin: 10px auto;
    background: white;
    max-width: 600px;
`;

const Section = styled.h2 `
    margin: 30px auto 20px;
    text-align: center;
    color: white;
`;

const LogoContainer = styled.div `
    margin: auto;
    padding: 26px;
    background: #3329a5;
    border-radius: 4px;
    margin-top: 30px;
`;

class Terms extends Component {

    componentDidMount() {
        ReactGA.pageview(this.props.location.pathname + this.props.location.search);
    }

    render() {
        return ( <
            Container >
            <
            LogoContainer >
            <
            Logo / >
            <
            /LogoContainer> <
            Section >
            Blocklord Terms of Use - Last Updated: February 1, 2018 < /Section> <
            FAQ >
            <
            div >
            Blocklord is a distributed application that runs on the Ethereum network, using specially - developed smart contracts(each, a“ Smart Contract”) to enable users to own, transfer, and customise virtual block on the world map, which can then be visualized on a website that the user can interact with(the“ Site”).The Smart Contracts and the Site are collectively referred to in these Terms as the“ App”.Using the App, users can view their blocks and use the Smart Contracts to acquire, trade, and customise blocks with other App users. < /div> <
            div > Blocklord is built and owned by Gitradar Ltd and both terms can be used interchangeably throughout these terms and privacy policy. < /div> <
            /FAQ> <
            FAQ >
            <
            div > Blocklord("Gitradar Ltd", "we", or "us") is making the App available to you.Before you use the App, the Smart Contracts, or the Site, however, you will need to agree to these Terms of Use and any terms and conditions incorporated herein by reference(collectively, these Terms).PLEASE READ THESE TERMS CAREFULLY BEFORE USING THE APP, THE SMART CONTRACTS, OR THE SITE.THESE TERMS GOVERN YOUR USE OF THE APP, THE SMART CONTRACTS, AND THE SITE, UNLESS WE HAVE EXECUTED A SEPARATE WRITTEN AGREEMENT WITH YOU FOR THAT PURPOSE.WE ARE ONLY WILLING TO MAKE THE APP, THE SMART CONTRACTS, AND THE SITE AVAILABLE TO YOU IF YOU ACCEPT ALL OF THESE TERMS.BY USING THE APP, THE SMART CONTRACTS, THE SITE, OR ANY PART OF THEM, OR BY CLICKING“ I ACCEPT” BELOW OR INDICATING YOUR ACCEPTANCE IN AN ADJOINING BOX, YOU ARE CONFIRMING THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY ALL OF THESE TERMS.IF YOU ARE ACCEPTING THESE TERMS ON BEHALF OF A COMPANY OR OTHER LEGAL ENTITY, YOU REPRESENT THAT YOU HAVE THE LEGAL AUTHORITY TO ACCEPT THESE TERMS ON THAT ENTITY’ S BEHALF, IN WHICH CASE“ YOU” WILL MEAN THAT ENTITY.IF YOU DO NOT HAVE SUCH AUTHORITY, OR IF YOU DO NOT ACCEPT ALL OF THESE TERMS, THEN WE ARE UNWILLING TO MAKE THE APP, THE SMART CONTRACTS, OR THE SITE AVAILABLE TO YOU.IF YOU DO NOT AGREE TO THESE TERMS, YOU MAY NOT ACCESS OR USE THE APP, THE SMART CONTRACTS, OR THE SITE. <
            /div> <
            /FAQ> <
            FAQ >
            <
            h3 > 1. The App < /h3> <
            div >
            A.To most easily use the App, you must first install the Google Chrome web browser.Once you have installed Chrome, you will need to install a browser extension called MetaMask.MetaMask is an electronic wallet, which allows you to purchase(either directly via Coinbase
                if you are in the United States, or via other third party sites), store, and engage in transactions using Ethereum cryptocurrency.You will not be able to engage in any transactions on the App other than through MetaMask(or other Ethereum - compatible browsers).The App will only recognize you as a user, and you will only be able to interact with the App,
            if your Ethereum electronic wallet is connected and unlocked through your MetaMask account.B.Transactions that take place on the App are managed and confirmed via the Ethereum blockchain.You understand that your Ethereum public address will be made publicly visible whenever you engage in a transaction on the App.C.We neither own nor control MetaMask, Coinbase, Google Chrome, the Ethereum network, or any other third party site, product, or service that you might access, visit, or use
            for the purpose of enabling you to use the various features of the App.We will not be liable
            for the acts or omissions of any such third parties, nor will we be liable
            for any damage that you may suffer as a result of your transactions or any other interaction with any such third parties.D.You must provide accurate and complete registration information when you create an account
            for the App.By creating an account, you agree to provide accurate, current and complete account information about yourself, and to maintain and promptly update as necessary your account information.You are responsible
            for the security of your account and your MetaMask wallet(and other Ethereum wallets and accounts).If you become aware of any unauthorized use of your password or of your account with us, you agree to notify us immediately at info @blocklord.co. <
            /div> <
            /FAQ> <
            FAQ >
            <
            h3 > 2. Fees and Payment < /h3> <
            div >
            A.If you elect to purchase or trade blocks on the App, or from other users via the App, any financial transactions that you engage in will be conducted solely through the Ethereum network via MetaMask.We will have no insight into or control over these payments or transactions, nor do we have the ability to reverse any transactions.
            With that in mind, we will have no liability to you or to any third party
            for any claims or damages that may arise as a result of any transactions that you engage in via the App, or using the Smart Contracts, or any other transactions that you conduct via the Ethereum network or MetaMask.B.Ethereum requires the payment of a transaction fee(a“ Gas Fee”) for every transaction that occurs on the Ethereum network.The Gas Fee funds the network of computers that run the decentralized Ethereum network.This means that you will need to pay a Gas Feefor each transaction that occurs via the App.C.In addition to the Gas Fee, each time you utilize a Smart Contract to conduct a transaction with another user via the App, you authorize us to collect a commission of 3 % of the total value of that transaction(each, a“ Commission”).You acknowledge and agree that the Commission will be transferred directly to us through the Ethereum network as part of your payment.D.As between us, you will be solely responsible to pay any and all sales, use, value - added and other taxes, duties, and assessments(except taxes on our net income) now or hereafter claimed or imposed by any governmental authority(collectively, “Taxes”) associated with your use of the App(including, without limitation, any Taxes that may become payable as the result of your ownership, or transfer of any of your Blocks).Except
            for income taxes levied on Blocklord, you: (i) will pay or reimburse us
            for all national, federal, state, local or other taxes and assessments of any jurisdiction, including value added taxes and taxes as required by international tax treaties, customs or other
            import or
            export taxes, and amounts levied in lieu thereof based on charges set, services performed or payments made hereunder, as are now or hereafter may be imposed under the authority of any national, state, local or any other taxing jurisdiction; and(ii) shall not be entitled to deduct the amount of any such taxes, duties or assessments from payments made to us pursuant to these Terms. <
            /div> <
            /FAQ> <
            FAQ >
            <
            h3 > 3. Ownership, Restrictions < /h3> <
            div >
            A.You acknowledge and agree that we(or, as applicable, our licensors) own all legal right, title and interest in and to all elements of the App, and all intellectual property rights therein.The visual interfaces, graphics(including, without limitation, all art and drawings associated with the Blocks), design, systems, methods, information, computer code, software, services, “look and feel”, organization, compilation of the content, code, data, and all other elements of the App are owned by Blocklord, and are protected by copyright, trade dress, patent, and trademark laws, international conventions, other relevant intellectual property and proprietary rights, and applicable laws.The App is the copyrighted property of Blocklord or its licensors, and all trademarks, service marks, and trade names contained in the App are proprietary to Blocklord or its licensors.Except as expressly set forth herein, your use of the App does not grant you ownership of or any other rights with respect to any content, code, data, or other materials that you may access on or through the App.We reserve all rights in and to the App not expressly granted to you in the Terms.For the sake of clarity, you understand and agree: (i) that your“ purchase” of a Block, whether via the App or otherwise, does not give you any rights or licenses in or to the App other than those expressly contained in these Terms; and(ii) that you do not have the right to reproduce, distribute, or otherwise commercialize any elements of the App in any way without our prior written consent in each
            case, which consent we may withhold in our sole and absolute discretion.B.You may choose to submit comments, bug reports, ideas or other feedback about the App, including without limitation about how to improve the App(collectively, “Feedback”).By submitting any Feedback, you agree that we are free to use such Feedback at our discretion and without additional compensation to you, and to disclose such Feedback to third parties(whether on a non - confidential basis, or otherwise).You hereby grant us a perpetual, irrevocable, nonexclusive, worldwide license under all rights necessaryfor us to incorporate and use your Feedback
            for any purpose.C.You agree that you are responsible
            for your own conduct
            while accessing or using the App, and
            for any consequences thereof.You agree to use the App only
            for purposes that are legal, proper and in accordance with these Terms and any applicable laws or regulations.By way of example, and not as a limitation, you may not, and may not allow any third party to:
                (i) send, upload, distribute or disseminate any unlawful, defamatory, harassing, abusive, fraudulent, obscene, or otherwise objectionable content;
                (ii) distribute viruses, worms, defects, Trojan horses, corrupted files, hoaxes, or any other items of a destructive or deceptive nature;
                (iii) impersonate another person(via the use of an email address or otherwise);
                (iv) upload, post, transmit or otherwise make available through the App any content that infringes the intellectual proprietary rights of any party;
                (v) use the App to violate the legal rights(such as rights of privacy and publicity) of others;
                (vi) engage in , promote, or encourage illegal activity(including, without limitation, money laundering);
                (vii) interfere with other users’ enjoyment of the App;
                (viii) exploit the App
                for any unauthorized commercial purpose;
                (ix) modify, adapt, translate, or reverse engineer any portion of the App;
                (x) remove any copyright, trademark or other proprietary rights notices contained in or on the App or any part of it;
                (xi) reformat or frame any portion of the App;
                (xii) display any content on the App that contains any hate - related or violent content or contains any other material, products or services that violate or encourage conduct that would violate any criminal laws, any other applicable laws, or any third party rights;
                (xiii) use any robot, spider, site search / retrieval application, or other device to retrieve or index any portion of the App or the content posted on the App, or to collect information about its users
                for any unauthorized purpose;
                (xiv) create user accounts by automated means or under false or fraudulent pretenses; or(xv) access or use the App
                for the purpose of creating a product or service that is competitive with any of our products or services. <
                /div> <
                /FAQ> <
                FAQ >
                <
                h3 > 4. Termination < /h3> <
                div >
                You may terminate these Terms at any time by canceling your account on the App and discontinuing your access to and use of the App.You will not receive any refunds
                if you cancel your account, or otherwise terminate these Terms.You agree that we, in our sole discretion and
                for any or no reason, may terminate these Terms and suspend and / or terminate your account(s) for the App.You agree that any suspension or termination of your access to the App may be without prior notice, and that we will not be liable to you or to any third party
                for any such suspension or termination.If we terminate these Terms or suspend or terminate your access to or use of the App due to your breach of these Terms or any suspected fraudulent, abusive, or illegal activity, then termination of these Terms will be in addition to any other remedies we may have at law or in equity.Upon any termination or expiration of these Terms, whether by you or us, you may no longer have access to information that you have posted on the App or that is related to your account, and you acknowledge that we will have no obligation to maintain any such information in our databases or to forward any such information to you or to any third party.Sections 2. C and 3 through 16 will survive the termination or expiration of these Termsfor any reason. <
                /div> <
                /FAQ> <
                FAQ >
                <
                h3 > 5. Disclaimers < /h3> <
                div >
                A.YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR ACCESS TO AND USE OF THE APP IS AT YOUR SOLE RISK, AND THAT THE APP IS PROVIDED "AS IS"
                AND "AS AVAILABLE"
                WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED.TO THE FULLEST EXTENT PERMISSIBLE PURSUANT TO APPLICABLE LAW, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS MAKE NO EXPRESS WARRANTIES AND HEREBY DISCLAIM ALL IMPLIED WARRANTIES REGARDING THE APP AND ANY PART OF IT(INCLUDING, WITHOUT LIMITATION, THE SITE, ANY SMART CONTRACT, OR ANY EXTERNAL WEBSITES), INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON - INFRINGEMENT, CORRECTNESS, ACCURACY, OR RELIABILITY.WITHOUT LIMITING THE GENERALITY OF THE FOREGOING, WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS DO NOT REPRESENT OR WARRANT TO YOU THAT: (I) YOUR ACCESS TO OR USE OF THE APP WILL MEET YOUR REQUIREMENTS, (II) YOUR ACCESS TO OR USE OF THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE OR FREE FROM ERROR, (III) USAGE DATA PROVIDED THROUGH THE APP WILL BE ACCURATE, (III) THE APP OR ANY CONTENT, SERVICES, OR FEATURES MADE AVAILABLE ON OR THROUGH THE APP ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR(IV) THAT ANY DATA THAT YOU DISCLOSE WHEN YOU USE THE APP WILL BE SECURE.SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO SOME OR ALL OF THE ABOVE EXCLUSIONS MAY NOT APPLY TO YOU.B.YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET, AND AGREE THAT WE HAVE NO LIABILITY OR RESPONSIBILITY FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.C.WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSSES YOU INCUR AS THE RESULT OF YOUR USE OF THE ETHEREUM NETWORK OR THE METAMASK ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (A) USER ERROR, SUCH AS FORGOTTEN PASSWORDS OR INCORRECTLY CONSTRUED SMART CONTRACTS OR OTHER TRANSACTIONS;
                (B) SERVER FAILURE OR DATA LOSS;
                (C) CORRUPTED WALLET FILES;
                (D) UNAUTHORIZED ACCESS OR ACTIVITIES BY THIRD PARTIES, INCLUDING BUT NOT LIMITED TO THE USE OF VIRUSES, PHISHING, BRUTEFORCING OR OTHER MEANS OF ATTACK AGAINST THE APP, ETHEREUM NETWORK, OR THE METAMASK ELECTRONIC WALLET.D.BLOCKS ARE INTANGIBLE DIGITAL ASSETS THAT EXIST ONLY BY VIRTUE OF THE OWNERSHIP RECORD MAINTAINED IN THE ETHEREUM NETWORK.ALL SMART CONTRACTS ARE CONDUCTED AND OCCUR ON THE DECENTRALIZED LEDGER WITHIN THE ETHEREUM PLATFORM.WE HAVE NO CONTROL OVER AND MAKE NO GUARANTEES OR PROMISES WITH RESPECT TO SMART CONTRACTS.E.BLOCKLORD IS NOT RESPONSIBLE FOR LOSSES DUE TO BLOCKCHAINS OR ANY OTHER FEATURES OF THE ETHEREUM NETWORK OR THE METAMASK ELECTRONIC WALLET, INCLUDING BUT NOT LIMITED TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES(OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING THE ETHEREUM NETWORK, INCLUDING FORKS, TECHNICAL NODE ISSUES, OR ANY OTHER ISSUES HAVING FUND LOSSES AS A RESULT. <
                /div> <
                /FAQ> <
                FAQ >
                <
                h3 > 6. Limitation of Liability < /h3> <
                div >
                A.YOU UNDERSTAND AND AGREE THAT WE, OUR SUBSIDIARIES, AFFILIATES, AND LICENSORS WILL NOT BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES WHICH YOU MAY INCUR, HOWSOEVER CAUSED AND UNDER ANY THEORY OF LIABILITY, INCLUDING, WITHOUT LIMITATION, ANY LOSS OF PROFITS(WHETHER INCURRED DIRECTLY OR INDIRECTLY), LOSS OF GOODWILL OR BUSINESS REPUTATION, LOSS OF DATA, COST OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES, OR ANY OTHER INTANGIBLE LOSS, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.B.YOU AGREE THAT OUR TOTAL, AGGREGATE LIABILITY TO YOU FOR ANY AND ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR YOUR ACCESS TO OR USE OF(OR YOUR INABILITY TO ACCESS OR USE) ANY PORTION OF THE APP, WHETHER IN CONTRACT, TORT, STRICT LIABILITY, OR ANY OTHER LEGAL THEORY, IS LIMITED TO THE GREATER OF(A) THE AMOUNTS YOU ACTUALLY PAID US UNDER THESE TERMS IN THE 12 MONTH PERIOD PRECEDING THE DATE THE CLAIM AROSE, OR(B) $100.C.YOU ACKNOWLEDGE AND AGREE THAT WE HAVE MADE THE APP AVAILABLE TO YOU AND ENTERED INTO THESE TERMS IN RELIANCE UPON THE WARRANTY DISCLAIMERS AND LIMITATIONS OF LIABILITY SET FORTH HEREIN, WHICH REFLECT A REASONABLE AND FAIR ALLOCATION OF RISK BETWEEN THE PARTIES AND FORM AN ESSENTIAL BASIS OF THE BARGAIN BETWEEN US.WE WOULD NOT BE ABLE TO PROVIDE THE APP TO YOU WITHOUT THESE LIMITATIONS.D.SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, AND SOME JURISDICTIONS ALSO LIMIT DISCLAIMERS OR LIMITATIONS OF LIABILITY FOR PERSONAL INJURY FROM CONSUMER PRODUCTS, SO THE ABOVE LIMITATIONS MAY NOT APPLY TO PERSONAL INJURY CLAIMS. <
                /div> <
                /FAQ> <
                FAQ >
                <
                h3 > 8. Assumption of Risk < /h3>
                You accept and acknowledge each of the following:
                A.The prices of blockchain assets are extremely volatile.Fluctuations in the price of other digital assets could materially and adversely affect the value of your Blocks, which may also be subject to significant price volatility.We cannot guarantee that any purchasers of Blocks will not lose money.B.You are solely responsible
                for determining what,
                if any, taxes apply to your Blocks - related transactions.Blocklord is not responsible
                for determining the taxes that apply to your transactions on the App, the Site, or the Smart Contracts.C.The App does not store, send, or receive Blocks.This is because Blocks exist only by virtue of the ownership record maintained on the App’ s supporting blockchain in the Ethereum network.Any transfer of Blocks occurs within the supporting blockchain in the Ethereum network, and not on the App.D.There are risks associated with using an Internet - based currency, including, but not limited to, the risk of hardware, software and Internet connections, the risk of malicious software introduction, and the risk that third parties may obtain unauthorized access to information stored within your wallet.You accept and acknowledge that Blocklord will not be responsible
                for any communication failures, disruptions, errors, distortions or delays you may experience when using the Ethereum network, however caused.E.A lack of use or public interest in the creation and development of distributed ecosystems could negatively impact the development of the Blocks ecosystem, and therefore the potential utility or value of Blocks.F.The regulatory regime governing blockchain technologies, cryptocurrencies, and tokens is uncertain, and new regulations or policies may materially adversely affect the development of the Blocks ecosystem, and therefore the potential utility or value of Blocks.G.Upgrades by Ethereum to the Ethereum platform, a hard fork in the Ethereum platform, or a change in how transactions are confirmed on the Ethereum platform may have unintended, adverse effects on all blockchains, including the Blocks ecosystem. < /FAQ> <
                FAQ >
                <
                h3 > 9. Indemnification < /h3>
                You agree to hold harmless and indemnify Blocklord and its subsidiaries, affiliates, officers, agents, employees, advertisers, licensors, suppliers or partners from and against any claim, liability, loss, damage(actual and consequential) of any kind or nature, suit, judgment, litigation cost, and attorneys’ fees arising out of or in any way related to(i) your breach of these Terms, (ii) your misuse of the App, or(iii) your violation of applicable laws, rules or regulations in connection with your access to or use of the App.You agree that Blocklord will have control of the defense or settlement of any such claims. < /FAQ> <
                FAQ >
                <
                h3 > 10. External Sites < /h3>
                The App may include hyperlinks to other web sites or resources(collectively, “External Sites”), which are provided solely as a convenience to our users.We have no control over any External Sites.You acknowledge and agree that we are not responsible
                for the availability of any External Sites, and that we do not endorse any advertising, products or other materials on or made available from any External Sites.
                Furthermore, you acknowledge and agree that we are not liable
                for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy or existence of any advertising, products or other materials on, or made available from, any External Sites. < /FAQ> <
                FAQ >
                <
                h3 > 11. Changes to the Terms < /h3>
                The App may include hyperlinks to other web sites or resources(collectively, “External Sites”), which are provided solely as a convenience to our users.We have no control over any External Sites.You acknowledge and agree that we are not responsible
                for the availability of any External Sites, and that we do not endorse any advertising, products or other materials on or made available from any External Sites.
                Furthermore, you acknowledge and agree that we are not liable
                for any loss or damage which may be incurred as a result of the availability or unavailability of the External Sites, or as a result of any reliance placed by you upon the completeness, accuracy or existence of any advertising, products or other materials on, or made available from, any External Sites. < /FAQ> <
                FAQ >
                <
                h3 > 12. Changes to the App < /h3>
                We may make changes to the Terms from time to time.When we make changes, we will make the updated Terms available on the App and update the“ Last Updated” date at the beginning of these Terms accordingly.Please check these Terms periodically
                for changes.Any changes to the Terms will apply on the date that they are made, and your continued access to or use of the App after the Terms have been updated will constitute your binding acceptance of the updates.If you do not agree to any revised Terms, you may not access or use the App. < /FAQ> <
                FAQ >
                <
                h3 > 13. Children < /h3>
                You affirm that you are over the age of 13, as the App is not intended
                for children under 13. IF YOU ARE 13 OR OLDER BUT UNDER THE AGE OF 18, OR THE LEGAL AGE OF MAJORITY WHERE YOU RESIDE IF THAT JURISDICTION HAS AN OLDER AGE OF MAJORITY, THEN YOU AGREE TO REVIEW THESE TERMS WITH YOUR PARENT OR GUARDIAN TO MAKE SURE THAT BOTH YOU AND YOUR PARENT OR GUARDIAN UNDERSTAND AND AGREE TO THESE TERMS.YOU AGREE TO HAVE YOUR PARENT OR GUARDIAN REVIEW AND ACCEPT THESE TERMS ON YOUR BEHALF.IF YOU ARE A PARENT OR GUARDIAN AGREEING TO THE TERMS FOR THE BENEFIT OF A CHILD OVER 13, THEN YOU AGREE TO AND ACCEPT FULL RESPONSIBILITY FOR THAT CHILD’ S USE OF THE APP, INCLUDING ALL FINANCIAL CHARGES AND LEGAL LIABILITY THAT HE OR SHE MAY INCUR. < /FAQ> <
                FAQ >
                <
                h3 > 14. Privacy Policy < /h3>
                Our Privacy Policy describes the ways we collect, use, store and disclose your personal information, and is hereby incorporated by this reference into these Terms.You agree to the collection, use, storage, and disclosure of your data in accordance with our Privacy Policy < /FAQ> <
                FAQ >
                <
                h3 > 15. Dispute Resolution; Arbitration < /h3>
                Please read this Section 15 carefully.It requires you to arbitrate disputes with Blocklord, and limits the manner in which you can seek relief from us.All disputes arising out of or in connection with these Terms, including without limitation your access or use of the App, the Site, or the Smart Contracts, or to any products sold or distributed through the App, the Site, or the Smart Contracts, will be referred to and
                finally resolved by arbitration under the rules of the London Court Of International Arbitration.The appointing authority will be the London Court Of International Arbitration.The
            case will be adjudicated by a single arbitrator and will be administered by the London Court Of International Arbitration in accordance with its applicable rules.Each party will cover its own fees and costs associated with the arbitration proceedings; however,
            if the arbitrator finds that you cannot afford to pay the fees and costs reasonably associated with the arbitration proceedings, Blocklord will pay them
            for you.The place of arbitration will be London, United Kingdom.You may choose to have the arbitration conducted by telephone, based on written submissions.The language of the arbitration will be English.The award of the arbitrator will be final and binding, and any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.Notwithstanding the foregoing, Blocklord may seek and obtain injunctive relief in any jurisdiction in any court of competent jurisdiction, and you agree that these Terms are specifically enforceable by Blocklord through injunctive relief and other equitable remedies without proof of monetary damages.WITH RESPECT TO ANY DISPUTE ARISING OUT OF OR RELATED TO THESE TERMS, INCLUDING WITHOUT LIMITATION DISPUTES RELATED TO THE APP, THE SITE, THE SMART CONTRACTS, OR ANY PRODUCTS SOLD OR DISTRIBUTED THROUGH THE APP, THE SITE, OR THE SMART CONTRACTS:
                (I) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO HAVE A TRIAL BY JURY; AND(II) YOU HEREBY EXPRESSLY GIVE UP YOUR RIGHT TO PARTICIPATE AS A MEMBER OF A CLASS OF CLAIMANTS IN ANY LAWSUIT, INCLUDING BUT NOT LIMITED TO CLASS ACTION LAWSUITS INVOLVING ANY SUCH DISPUTE. < /FAQ> <
                FAQ >
                <
                h3 > 16. General < /h3>
                These Terms constitute the entire legal agreement between you and Blocklord, govern your access to and use of the App, and completely replace any prior or contemporaneous agreements between the parties related to your access to or use of the App, whether oral or written.There are no third party beneficiaries to these Terms.The parties are independent contractors, and nothing in these Terms create any agency, partnership, or joint venture.The language in these Terms will be interpreted as to its fair meaning, and not strictly
                for or against any party.You may not assign any or your rights or obligations under these Terms, whether by operation of law or otherwise, without our prior written consent.We may assign our rights and obligations under these Terms in our sole discretion to an affiliate, or in connection with an acquisition, sale or merger.Should any part of these Terms be held invalid or unenforceable, that portion shall be construed consistent with applicable law and the remaining portions will remain in full force and effect.Our failure to enforce any provision of these Terms will not be deemed a waiver of such provision, nor of the right to enforce such provision.These Terms will be governed by and construed in accordance with the laws of the province of the United Kingdom applicable therein, excluding its conflicts of law rules and principles.Subject to Section 15, any legal action or proceeding arising under these Terms will be brought exclusively in the federal or provincial courts located in Vancouver, British Columbia, and the parties irrevocably consent to the personal jurisdiction and venue there.We will not be liable
                for any failure or delayed performance of our obligations that result from any condition beyond our reasonable control, including, but not limited to, governmental action, acts of terrorism, earthquake, fire, flood, acts of God, labor conditions, power failures, Internet disturbances, or acts or omissions of third parties.You agree that we may provide you with notices(including, without limitation those regarding changes to these Terms) by email, regular mail, or postings on the App.By providing us with your email address, you consent to our using the email address to send you any notices required by law in lieu of communication by postal mail. <
                /FAQ> <
                /Container>
        );
    }
};
export default Terms;



// WEBPACK FOOTER //
// ./src/modules/terms/index.js