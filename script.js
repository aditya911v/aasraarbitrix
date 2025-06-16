document.addEventListener('DOMContentLoaded', () => {
    // Horizontal drag scroll (keep your previous code if you want)
    const scrollCards = document.querySelector('.scroll-cards');
    let isScrolling = false, startX, scrollLeft;

    scrollCards.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - scrollCards.offsetLeft;
        scrollLeft = scrollCards.scrollLeft;
        scrollCards.style.cursor = 'grabbing';
    });
    scrollCards.addEventListener('mouseleave', () => {
        isScrolling = false;
        scrollCards.style.cursor = 'grab';
    });
    scrollCards.addEventListener('mouseup', () => {
        isScrolling = false;
        scrollCards.style.cursor = 'grab';
    });
    scrollCards.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - scrollCards.offsetLeft;
        const walk = (x - startX) * 1.2;
        scrollCards.scrollLeft = scrollLeft - walk;
    });

    // Intersection Observer for scroll-in animation
    const cards = document.querySelectorAll('.scroll-card');
    const observer = new window.IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            root: scrollCards,
            threshold: 0.3
        }
    );
    cards.forEach(card => observer.observe(card));

    // Staggered scroll-in animation for .hiw-step
    const steps = document.querySelectorAll('.hiw-step');
    const stepObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, idx * 120); // Stagger effect
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    steps.forEach(step => stepObserver.observe(step));

    const modal = document.getElementById('attorney-modal');
    const modalBody = document.getElementById('attorney-modal-body');
    const closeBtn = document.getElementById('attorney-modal-close');
    const profiles = {
        aparna: `
      <div class="attorney-profile-content">
        <h2 class="attorney-name">Mrs. Aparna R. Shrivastava</h2>
        <h4 class="attorney-title">Founder, Aasraar Arbitrix and Mediation Hub LLP & Reliable Legal Partners</h4>
        <p class="attorney-bio">Mrs. Aparna R. Shrivastava is a distinguished legal professional with over 22 years of experience in corporate and commercial laws. As the founder of both Aasraar Arbitrix and Mediation Hub LLP and Reliable Legal Partners, she brings unparalleled expertise in arbitration, litigation, and corporate legal consulting.</p>
        <div class="attorney-section">
          <h4>Academic Excellence</h4>
          <ul>
            <li>Master of Laws (LL.M.) in Corporate Laws & International Business from NALSAR, Hyderabad</li>
            <li>Recipient of SAARC LAW International Scholarship (M.K. Nambiar SAARCLAW Charitable Trust)</li>
            <li>PG Diploma in Arbitration and Conciliation from Mumbai University</li>
            <li>Certificate Course in Arbitration from IMC Chamber of Commerce and Industry</li>
            <li>Currently pursuing PhD in Mergers and Acquisition from JJTU</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Professional Highlights</h4>
          <ul>
            <li>22+ years of practice with Bar Council of Maharashtra</li>
            <li>Sole Arbitrator for Tata Group and other organizations</li>
            <li>Legal consultant for: ICICI Bank, Manappuram Finance Ltd., IIFL, Karur Vysya Bank, Kotak Mahindra, AU Small Finance, Aadhar Housing, SVC Bank, Hinduja Leland, Kraft Heinz, etc.</li>
            <li>Expert in Civil, Criminal & Arbitration Laws</li>
            <li>Visiting Faculty at MNLU and Adhia Law College</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Distinguished Experience</h4>
          <ul>
            <li>Worked under Hon'ble Chief Justice of India, Dr. D.Y. Chandrachud and DGM at SEBI. Corporate roles at Johnson & Johnson, Thomson Reuters, and Shamrao Vithal Bank.</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Expertise Includes</h4>
          <ul>
            <li>Corporate and commercial litigation</li>
            <li>Arbitration proceedings</li>
            <li>Debt recovery tribunals</li>
            <li>NCLT proceedings</li>
            <li>Legal compliance and contract advisory</li>
            <li>Corporate governance</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Contact Information</h4>
          <p>
            <b>Email:</b> <a href="mailto:legal.aparna@gmail.com">legal.aparna@gmail.com</a> | <a href="mailto:reliablelegalpartners@gmail.com">reliablelegalpartners@gmail.com</a><br>
            <b>Phone:</b> <a href="tel:+919619077121">+91 9619077121</a> | <a href="tel:+919969803131">+91 9969803131</a><br>
            <b>Office:</b> Chamber No. 10, Referreda Building, 2nd Floor, Off Mahakali Caves Road, Near Sai Palace Hotel, Andheri East, Mumbai – 400093
          </p>
        </div>
      </div>
    `,
        manoj: `
      <div class="attorney-profile-content">
        <h2 class="attorney-name">Adv. Manoj B. Dalvi</h2>
        <h4 class="attorney-title">Senior Advocate & Arbitrator</h4>
        <p class="attorney-bio">Adv. Manoj B. Dalvi is a distinguished legal professional with nearly three decades of extensive experience. With 29 years of legal practice, he is a trusted advocate and arbitrator for many prestigious institutions.</p>
        <div class="attorney-section">
          <h4>Professional Experience</h4>
          <ul>
            <li>29 years of legal practice since July 18, 1995 (MAH/2037/1995)</li>
            <li>Started with Banatwala & Co. in 1995; Partner in 2006</li>
            <li>Independent practice since 2012</li>
            <li>Member, Bar Council of Maharashtra & Goa</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Areas of Expertise</h4>
          <ul>
            <li>Property Law</li>
            <li>Construction Contracts</li>
            <li>Corporate Laws</li>
            <li>Arbitration Proceedings</li>
            <li>Civil Litigation</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Esteemed Clientele</h4>
          <ul>
            <li>National Textile Corporation</li>
            <li>L&T Finance Ltd. (Arbitrator since 2012)</li>
            <li>Tata Motors Finance Ltd.</li>
            <li>NeoGrowth Credit Pvt. Ltd.</li>
            <li>IDFC Bank</li>
            <li>Mintifi Finserve Pvt. Ltd.</li>
            <li>Fortune Integrated Assets Finance Ltd.</li>
            <li>InCred Financial Services Ltd.</li>
            <li>APAC Financial Services Pvt. Ltd.</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Jurisdictional Experience</h4>
          <ul>
            <li>High Court of Mumbai (Original & Appellate)</li>
            <li>City Civil Court, Mumbai</li>
            <li>Small Causes Court (Rent Act)</li>
            <li>Arbitration Tribunals</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Education</h4>
          <ul>
            <li>B.A. LL.B.</li>
          </ul>
        </div>
        <div class="attorney-section">
          <h4>Contact Information</h4>
          <p>
            <b>Office:</b> Office No. 47, 3rd Floor, Lawyers Chambers, R.S. Sapre Road, Dhobi Talao, Mumbai - 400002<br>
            <b>Residence:</b> W-27, Flat 2601, 26th Floor, Lodha Amara, Kolshet Road, Thane West<br>
            <b>Phone:</b> <a href="tel:+919869012793">+91 9869012793</a> | <a href="tel:+919930813608">+91 9930813608</a><br>
            <b>Email:</b> <a href="mailto:mb_d@rediffmail.com">mb_d@rediffmail.com</a>
          </p>
        </div>
      </div>
    `
    };

    document.querySelectorAll('.attorney-card').forEach(card => {
        card.addEventListener('click', function() {
            const key = this.getAttribute('data-attorney');
            modalBody.innerHTML = profiles[key];
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // When modal opens, scroll to top smoothly
            modalBody.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    closeBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Close modal on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lottie animation
    lottie.loadAnimation({
        container: document.getElementById('heroLottie'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/animations/justice-animation.json' // Your Lottie JSON file
    });
});


document.addEventListener('DOMContentLoaded', function() {
        lottie.loadAnimation({
            container: document.getElementById('lottie-animation'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'anima.json' // Your provided Lottie JSON file
        });
});