// import ResumeGeneratorMain from "../components/resume-generator-components/ResumeGeneratorMain";
// import ResumeServices from "../components/resume-generator-components/ResumeServices";

import ResumeGeneratorMain from "../components/generated-services-components/ResumeGeneratorMain";
import ResumeServices from "../components/generated-services-components/ResumeServices";

const GeneratedServices = () => {
  return (
    <div className="text-red-700">
      <ResumeGeneratorMain />
      <ResumeServices />
    </div>
  );
};

export default GeneratedServices;
