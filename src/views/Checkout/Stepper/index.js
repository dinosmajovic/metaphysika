import styled from 'styled-components';
import { colors } from 'styles';

const StepperContainer = styled.div`
  align-self: center;
  margin-bottom: 50px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    margin-top: 20px;
  }
`;

const Step = styled.span`
  font-size: 18px;
  cursor: default;
  color: ${(props) => (props.isCurrentStep ? colors.pink.dark : null)};
  border-bottom: ${(props) =>
    props.isCurrentStep ? `1px solid ${colors.pink.dark}` : null};
  padding-bottom: 3px;

  :not(:last-child) {
    margin-right: 55px;
  }
`;

const Stepper = ({ steps, currentStep }) => {
  return (
    <StepperContainer>
      {steps.map((step) => {
        return (
          <Step key={step.name} isCurrentStep={currentStep === step.name}>
            {step.label}
          </Step>
        );
      })}
    </StepperContainer>
  );
};

export default Stepper;
