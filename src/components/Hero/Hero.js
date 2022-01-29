import React from 'react'
import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
  <Section row nopadding style={{ marginTop: '40px' }}>
    <LeftSection>
      <SectionTitle style={{ paddingLeft: '20px' }}>
        Hello.
        <br />
        I'm Sanjanaa Zola.
      </SectionTitle>
      <SectionText style={{ paddingLeft: '20px' }}>
        Currently passionate about Web Development using ReactJs and also
        interested in learning new technologies.
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            'https://sz-resume.s3.ap-southeast-1.amazonaws.com/SanjanaaZola_Resume.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmFwLXNvdXRoLTEiRzBFAiAjRb5YyCk%2BGBz8%2BbTZ5Jb%2FH%2BpOtZRR2Nxtbfi8HwCS5wIhAKXi9L9dw6DGR6rTJjSlNJuj7McEkYbC%2BoLTDp2Lq5QdKu0CCPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTgwMzkwMDI1MDI0IgxBXyWxJbbGyToOe1gqwQI6Lr1ejFiZ4xO6p4AF6DMErsuzXd8%2FIcoIh7EbhDAkdBCXmrHLk%2FA1zgau%2Fe7gBNQA2FZOONTQYCag5GmOm8fHqffkZWDtKfKsS4fScOdUmzkzYc4dTIcJhd4YhTmy0DWNhk7BmdXpHFk5uwe249PnN9TPbu%2B0Gi6b52z4VyALfRb7oSie5wdBThUAi9kWBfGSl%2FyxjbQatjUZ6OHpU6kQL2raUIEfMsI2hzILVWBrinTf3O%2F1kfPIss4kXY1o%2B3DsNO3eUL1lZS1ZFItM%2FpTNZX6i05c59fxzBT8LArUjqnTTGYtUSD2QJI7JEFjHrpnOJCpPgfSZMvp5xZYBDCT01FNaxs9x9f%2BH0DuVjn9JvG6EvXrRVnqESYbOG3Cz1nOVrAoOXfQe9bZ%2FRY%2BL645dJv3CyIGmuSkk95x%2B2kG45B8wrs%2FVjwY6swJSXx9%2Fmo5b5oBUpek2na98yuh8cqQ5yE8dnyFcxiN1MvhQ2pcVkqkEkUuBk1BXwZvzebnF7%2F2LascHFxCCRb2t9KMGdfPXqNewv0IXREjJONJ04QyAHCfbNERSRqBNUohz1Haipj7NdLvEh%2Bn0jc4uPza4EhtIqgh%2BrwpHfJ3rODEeXjHWeu5EdS6Qj%2F6ljF8HqjCGusEQzEsaXDuBMFira93K3h10SrZxkTDRfV8fPMTFzi2sdWH7hkoML4vytsMWqLkZsRMYwpOL0OGwcsGxw71YVvAPt199Q0Nwdr5NVtlG4UOWtS8U9mGoAXFdJU2lfCGb5G%2F%2FEK5vYcYl45AHyzuFom4CI375YnE3QvIKsaewI%2F%2FbYXgb2%2BxhnvVqcLb6V%2FvpbfwCfkZcK5VzHPdcmMG%2B&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220129T163404Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIASUAAVK5AJAUZLHXP%2F20220129%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Signature=ddef97dfebc961c93be8032f7d18643fab3df5a062557d0b4a1607f89e2649fe')
        }
      >
        Download CV
      </Button>
    </LeftSection>
  </Section>
)

export default Hero
