const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src');
const componentsDir = path.join(srcDir, 'components');
const appDir = path.join(srcDir, 'app');

const map = {
  // Layout
  'Navbar.jsx': 'layout/Navbar.jsx',
  'Footer.jsx': 'layout/Footer.jsx',
  
  // Forms
  'BookingModal.jsx': 'forms/BookingModal.jsx',
  'BookingInterceptor.jsx': 'forms/BookingInterceptor.jsx',
  
  // Webflow
  'WebflowInit.jsx': 'webflow/WebflowInit.jsx',
  'WebflowPageId.jsx': 'webflow/WebflowPageId.jsx',
  
  // Home
  'HeroSection_0.jsx': 'sections/home/HeroSection.jsx',
  'AboutSection_1.jsx': 'sections/home/AboutPreview.jsx',
  'ServicesSection_2.jsx': 'sections/home/ServicesShowcase.jsx',
  'Section4_3.jsx': 'sections/home/StatsSection.jsx',
  'Section6_5.jsx': 'sections/home/TestimonialsIntro.jsx',
  'Section7_6.jsx': 'sections/home/WhoWeAre.jsx',
  'Section8_7.jsx': 'sections/home/WhoWeAreBanner.jsx',
  'Section10_9.jsx': 'sections/home/SpecialtiesGrid.jsx',
  'Section11_10.jsx': 'sections/home/LogoMarquee.jsx',
  'Section13_12.jsx': 'sections/home/CtaBanner.jsx',
  'Section14_13.jsx': 'sections/home/TestimonialsCarousel.jsx',
  
  // About
  'AboutSection1.jsx': 'sections/about/AboutHero.jsx',
  'AboutSection2.jsx': 'sections/about/AboutMission.jsx',
  'AboutSection3.jsx': 'sections/about/AboutFeatures.jsx',
  'AboutSection5.jsx': 'sections/about/AboutCta.jsx',
  'AboutSection6.jsx': 'sections/about/AboutLogoMarquee.jsx',
  'AboutSection7.jsx': 'sections/about/AboutValues.jsx',
  'AboutSection8.jsx': 'sections/about/AboutTimeline.jsx',
  'AboutSection9.jsx': 'sections/about/AboutFooterMarquee.jsx',
  
  // Contact
  'ContactSection1.jsx': 'sections/contact/ContactHero.jsx',
  'ContactSection2.jsx': 'sections/contact/ContactInfo.jsx',
  'ContactSection3.jsx': 'sections/contact/ContactForm.jsx',
  
  // Service
  'ServiceSection1.jsx': 'sections/service/ServiceHero.jsx',
  'ServiceSection2.jsx': 'sections/service/ServiceGrid.jsx',
  'ServiceSection3.jsx': 'sections/service/ServiceCta.jsx',
  
  // Service Detail
  'ServicedetailHealthcareSection1.jsx': 'sections/service-detail/ServiceDetailHero.jsx',
  'ServicedetailHealthcareSection2.jsx': 'sections/service-detail/ServiceDetailContent.jsx',
  'ServicedetailHealthcareSection3.jsx': 'sections/service-detail/ServiceDetailFeatures.jsx',
  'ServicedetailHealthcareSection4.jsx': 'sections/service-detail/ServiceDetailGrid.jsx',
  'ServicedetailHealthcareSection5.jsx': 'sections/service-detail/ServiceDetailCta.jsx',
  
  // Team
  'SpecialistsSection1.jsx': 'sections/team/TeamHero.jsx',
  'SpecialistsSection2.jsx': 'sections/team/TeamStats.jsx',
  'SpecialistsSection3.jsx': 'sections/team/TeamGrid.jsx',
  
  // Appointment
  'AppointmentscheduleSection1.jsx': 'sections/appointment/AppointmentHero.jsx',
  'AppointmentscheduleSection2.jsx': 'sections/appointment/AppointmentCalendar.jsx'
};

// 1. Create directories
const dirs = new Set(Object.values(map).map(p => path.dirname(p)));
dirs.forEach(d => {
  const dirPath = path.join(componentsDir, d);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// 2. Move files and update component names
Object.keys(map).forEach(oldName => {
  const oldPath = path.join(componentsDir, oldName);
  const newPath = path.join(componentsDir, map[oldName]);
  
  if (fs.existsSync(oldPath)) {
    let content = fs.readFileSync(oldPath, 'utf8');
    
    // Update component name export
    const oldComponentName = oldName.replace('.jsx', '');
    const newComponentName = path.basename(map[oldName]).replace('.jsx', '');
    
    content = content.replace(new RegExp(`export default function ${oldComponentName}`, 'g'), `export default function ${newComponentName}`);
    content = content.replace(new RegExp(`function ${oldComponentName}`, 'g'), `function ${newComponentName}`);
    
    fs.writeFileSync(newPath, content);
    fs.unlinkSync(oldPath);
  }
});

// 3. Update imports in all app files
function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(appDir, filePath => {
  if (!filePath.match(/\.(js|jsx)$/)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;
  
  Object.keys(map).forEach(oldName => {
    const oldComponentName = oldName.replace('.jsx', '');
    const newComponentName = path.basename(map[oldName]).replace('.jsx', '');
    const newRelPath = map[oldName].replace('.jsx', '');
    
    // Static imports
    const staticImportRegex = new RegExp(`import ${oldComponentName} from ["']@/components/${oldComponentName}["']`, 'g');
    if (staticImportRegex.test(content)) {
      content = content.replace(staticImportRegex, `import ${newComponentName} from "@/components/${newRelPath}"`);
      changed = true;
    }
    
    // Dynamic imports
    const dynamicImportRegex = new RegExp(`dynamic\\(\\(\\) => import\\(["']@/components/${oldComponentName}["']\\)\\)`, 'g');
    if (dynamicImportRegex.test(content)) {
      content = content.replace(dynamicImportRegex, `dynamic(() => import("@/components/${newRelPath}"))`);
      changed = true;
    }
    
    // JSX tags
    const jsxRegex = new RegExp(`<${oldComponentName}( |>)`, 'g');
    if (jsxRegex.test(content)) {
      content = content.replace(jsxRegex, `<${newComponentName}$1`);
      changed = true;
    }
    const jsxCloseRegex = new RegExp(`</${oldComponentName}>`, 'g');
    if (jsxCloseRegex.test(content)) {
      content = content.replace(jsxCloseRegex, `</${newComponentName}>`);
      changed = true;
    }
  });
  
  if (changed) {
    fs.writeFileSync(filePath, content);
  }
});

console.log("Component refactoring completed successfully.");
