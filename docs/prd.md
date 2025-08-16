# Website for Marit Aslesen’s Quilt and Sewing Services

## Introduction and Background

**Marit Aslesen** is an experienced quilter and sewing enthusiast who for nearly 10 years ran the well-known quilt shop **Quiltefryd** in Tønsberg . Now that the physical shop is closing in connection with Marit’s retirement, she will continue to offer her services in sewing and quilting from home. Her goal is to provide customers with personal, skilled help — from quilting quilt tops to sewing home textiles and making adjustments to traditional Norwegian bunads. Marit brings her extensive expertise and passion for sewing into this new phase, allowing both loyal and new customers to benefit from her skills.
With over a decade in the industry (she took over Quiltefryd in 2016 and has “not regretted a single day” ), Marit has built a strong reputation for quality and service. This website will present her services and make it easy for customers to get in touch — whether they need a beautiful quilt finished or professional sewing help for bunads and curtains.

## Market Insights: Sewing and Quilting Services in Norway and the Nordics

A review of similar services in Norway, Sweden, and Denmark shows there is strong demand for custom sewing and quilting work done by experienced professionals. In Norway, many sewing studios and quilt workshops offer a wide range of services — from clothing repairs and bunad sewing to quilting patchwork tops.
For example, **Pynten Design** in Telemark highlights 30 years of experience and advertises: “alteration of clothes, repair of clothes, sewing of curtains and cushions, bunad alteration, etc.” — with no job too small or too big . Likewise, **Sømhuset AS** in Bærum offers “everything in sewing,” including **bunad alterations** and **home sewing like curtains**  . These businesses emphasize personal service and custom solutions, encouraging customers to get in touch to discuss needs and pricing .

When it comes to **quilting services**, it’s common in Scandinavia to offer machine quilting with a longarm machine, often priced per square meter. For example, **Lappemor** (Husfliden Tynset) and other Norwegian quilt shops list prices around **325–330 NOK per m²** for simple *edge-to-edge* quilting  . Services like **Nordic Calico** in Norway provide detailed price lists showing standard edge-to-edge quilting at approx. **325 NOK/m²** , with higher rates for custom or freehand work. In Denmark, workshops such as BeoBeo Patchwork in Maribo promote “professional quilting on American longarm machines” and invite customers to get in touch for details .
This confirms that in our market, it’s important to communicate clearly what equipment and skills you have (for example, Marit’s **Innova longarm quilting machine**) and to offer flexible options — from standard quilting to extras like binding and assembly.

Another common factor in the Nordic market is the focus on **personal communication** rather than complicated online ordering. Most sewing studios and quilters use simple websites with service information and contact details, rather than full e-commerce systems. Customers are encouraged to call or email to arrange details and price estimates . Some also have basic inquiry forms, and a few offer **online booking** of services or machine rental. For example, Nordic Calico uses an integrated form (Google Forms) to let customers “book longarm service” online .
This suggests Marit’s new website should keep a friendly, personal feel: present services clearly, highlight her unique experience from Quiltefryd, and make it easy to contact her directly. We should also consider including a simple order form or booking option — as long as it works with a static site hosted on GitHub Pages.

---

## Target Audience and Goals

**Target audience:**

* **Quilters and sewing enthusiasts** who have created their own quilt tops or sewing projects and need help with finishing (quilting, batting/backing assembly, binding, etc.). Includes both local hobbyists in Vestfold/Telemark and customers nationwide who can send in their quilt tops by mail (something Quiltefryd has offered before ).
* **Private customers needing sewing and tailoring services**, such as hemming curtains, sewing cushion covers, or repairing/adjusting clothing. This includes those needing assistance with traditional garments like bunads — especially before major holidays like May 17th, confirmations, or weddings.
* **Former Quiltefryd customers**: Marit had a loyal customer base through the shop, including many quilters nationwide. The website should reassure them that, although the shop is closed, they can still get quilting and sewing help from Marit.

**Website goals:**

* **Inform** clearly about the services Marit now offers, acting as a “digital brochure” for her new sole proprietorship.
* **Build trust** by highlighting Marit’s experience and history from Quiltefryd, using an “About Me” section that tells the story of her 15 years in the quilting/sewing world, her longarm machine, and her commitment to quality and service.
* **Convert visitors into inquiries**: Make it easy to contact her for a service request. Include visible contact details on every page and preferably a simple inquiry form.
  If possible, also add a calendar/booking feature for appointments (for drop-offs or consultations). Since the site will be static on GitHub Pages, this would have to be done with a third-party service like **Calendly** or an email form via **Formspree**  .
* **Showcase photos** of Marit’s work to inspire customers. Initially, we can use stock or archival photos, later replacing them with actual product images of her completed projects.

---

## Structure and Navigation

The site will be a **simple static site** with a clear division of content, likely built as multiple static HTML pages (or Jekyll-generated). Navigation menu at the top with:

1. **Home** – Welcome text, quick overview of services, prominent contact details, and a call-to-action button.
2. **Services** – Detailed descriptions of:

    * Longarm quilt services (process, pricing per m², extras like binding and batting supply).
    * Home sewing (curtains, cushions, custom home textiles).
    * Clothing alterations (hems, zippers, resizing).
    * Bunad adjustments (taking in/out, hemming skirts, replacing hooks, etc.).
    * Other sewing projects.
3. **About Marit** – Her story, experience from Quiltefryd, philosophy, and possibly customer testimonials.
4. **Prices** – Price list or “contact for quote,” with example price points where possible.
5. **Contact** – Phone, email, location (optional for privacy), inquiry form via Formspree, and optional booking calendar via Calendly.

---

## Design and Style

* **Color palette:** Warm, natural tones (light cream/beige background, muted green or blue-green accents, and deep red/burgundy highlights).
* **Typography:** Friendly, readable fonts — sans-serif like Open Sans for body, serif for headings, optionally a decorative script for her name/logo.
* **Layout:** Responsive, mobile-first design with a simple navigation bar, hero image on home page, content width max \~800px for readability, subtle fabric-like background texture.
* **Images:** High-quality photos of quilting/sewing in action and finished projects; initial placeholders replaced later with Marit’s own work.
* **Tone:** Friendly, personal, but professional. First-person voice (“I offer…”) is encouraged to build connection.

---

## Technical Implementation

* **Hosting:** GitHub Pages.
* **Languages:** HTML5, CSS3, minimal JavaScript (for interactivity and form handling).
* **Contact Form:** Use Formspree (or similar) to send form data via email to [marit@quiltefryd.no](mailto:marit@quiltefryd.no) .
* **Booking:** Optionally embed a Calendly widget or Google Form for appointment scheduling .
* **SEO:** Use descriptive page titles, meta descriptions, and relevant keywords (“quilting Tønsberg,” “bunad alteration Vestfold”).
* **Domain:** Ideally point **quiltefryd.no** to the GitHub Pages site to retain search ranking.

---

## Content Preparation and Updates

* Prepare placeholder text for prices until Marit’s list is ready.
* Include space for testimonials and a photo gallery to be updated later.
* Optionally embed Facebook/Instagram links for ongoing updates.

---

If you’d like, I can now produce **all text in English** for the site itself (Home, Services, About, Prices, Contact) so your junior engineer or Claude Code can directly use it for implementation.
Do you want me to prepare that next?
