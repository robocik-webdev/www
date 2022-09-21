<script>
  import { lang } from '$lib/website/docs/lang';
  const img = '/drones/bluenemo/docs';
</script>

<div class="wrapper">
  <div class="depth--0">
    <h1 id="ReportSummary">{$lang.reportsummaryHeader}</h1>
    <p>{@html $lang.reportsummaryContent}</p>
  </div>

  <div class="depth--0">
    <h1 id="OrganizationChart">{$lang.organizationchartHeader}</h1>
    <p>{@html $lang.organizationchartContent}</p>
    <figure>
      <img src="{img}/diagram_management.webp" alt="Organization chart" />
      <figcaption>Fig.1 - Organization Chart.</figcaption>
    </figure>
  </div>

  <div class="depth--0">
    <h1 id="VehicleDesign">{$lang.vehicledesignHeader}</h1>

    <div class="depth--1">
      <h2 id="SystemDesign">{$lang.systemdesignHeader}</h2>
      <figure>
        <img src="{img}/FrontDesign.webp" alt="front design" />
        <figcaption>Fig.2 - Front design</figcaption>
      </figure>
    </div>

    <div class="depth--1">
      <h2 id="MechanicalDesign">{$lang.mechanicaldesignHeader}</h2>

      <div class="depth--2">
        <h3 id="MechanicalDesignProcess">
          {$lang.mechanicaldesignprocessHeader}
        </h3>
        <p>{@html $lang.mechanicaldesignprocessContent}</p>
        <figure>
          <img src="{img}/1.webp" alt="1" />
          <figcaption>Fig.3 - Front view.</figcaption>
        </figure>
        <figure>
          <img src="{img}/3.webp" alt="3" />
          <figcaption>Fig.4 - Top view.</figcaption>
        </figure>
        <figure>
          <img src="{img}/4.webp" alt="4" />
          <figcaption>Fig.5 - Side view.</figcaption>
        </figure>
        <figure>
          <img src="{img}/2.webp" alt="2" />
          <figcaption>Fig.6 - BlueNemo renders.</figcaption>
        </figure>
      </div>

      <div class="depth--2">
        <h3 id="Materials">{$lang.materialsHeader}</h3>
        <p>{@html $lang.materialsContent1}</p>
        <figure>
          <img src="{img}/forces_cylinder.webp" alt="forces cylinder" />
          <figcaption>
            Fig.7 - The chosen shape and material ensure ample resistance to hydrostatic pressure. The maximum stresses
            at a depth of 100 m are 26.5 MPa.
          </figcaption>
        </figure>
        <p>{@html $lang.materialsContent2}</p>
        <figure>
          <img src="{img}/forces_plate.webp" alt="forces plate" />
          <figcaption>
            Fig.8 - The chosen shape and material ensure average resistance to hydrostatic pressure. The maximum
            stresses at a depth of 100 m are 59.5 MPa.
          </figcaption>
        </figure>
        <p>{@html $lang.materialsContent3}</p>
        <figure>
          <img src="{img}/5.webp" alt="outer skeleton" />
          <figcaption>Fig.9 - The outer skeleton, i.e. the frame of the pressure chamber.</figcaption>
        </figure>
        <p>{@html $lang.materialsContent4}</p>
        <figure>
          <img src="{img}/gripper_crossection.webp" alt="gripper crosdiv" />
          <figcaption>Fig.10 - Mechanical gripper render.</figcaption>
        </figure>
        <!-- inne zdjęcie niż w docxie-->
        <figure>
          <img src="{img}/gripper_with_ball.webp" alt="example gripper" />
          <figcaption>Fig.11 - Example use of the gripper.</figcaption>
        </figure>
        <p>{@html $lang.materialsContent5}</p>
        <figure>
          <img src="{img}/rov_thruster.webp" alt="rov thruster" style="height:25%;width:25%;" />
          <figcaption>Fig.12 - BLDC T200 Thruster.</figcaption>
        </figure>
      </div>

      <div class="depth--2">
        <h3 id="ProductionMethods">{$lang.productionmethodsHeader}</h3>
        <p>{@html $lang.productionmethodsContent}</p>
      </div>

      <div class="depth--2">
        <h3 id="PhysicalProperties">{$lang.physicalpropertiesHeader}</h3>
        <p>{@html $lang.physicalpropertiesContent}</p>
      </div>
    </div>

    <div class="depth--1">
      <h2 id="ElectronicDesign">{$lang.electronicdesignHeader}</h2>

      <div class="depth--2">
        <h3 id="ElectronicDesignProcess">
          {$lang.electronicdesignprocessHeader}
        </h3>
        <p>{@html $lang.electronicdesignprocessContent1}</p>
        <ul>
          <li>{@html $lang.electronicdesignprocessList1}</li>
          <li>{@html $lang.electronicdesignprocessList2}</li>
          <li>{@html $lang.electronicdesignprocessList3}</li>
          <li>{@html $lang.electronicdesignprocessList4}</li>
          <li>{@html $lang.electronicdesignprocessList5}</li>
        </ul>
        <p>{@html $lang.electronicdesignprocessContent2}</p>
        <figure>
          <img src="{img}/diagram_power_communication.webp" alt="electronics diagram" style="height:80%;width:80%;" />
          <figcaption>Fig.13 - Electronics block diagram.</figcaption>
        </figure>

        <div class="depth--3">
          <h4 id="PowerSupply">{$lang.powersupplyHeader}</h4>
          <p>{@html $lang.powersupplyContent1}</p>
          <ul>
            <li>{@html $lang.powersupplyList1}</li>
            <li>{@html $lang.powersupplyList2}</li>
            <li>{@html $lang.powersupplyList3}</li>
          </ul>
          <p>{@html $lang.powersupplyContent2}</p>
          <figure>
            <img src="{img}/board_thrusters.webp" alt="powering motors pcb" />
            <figcaption>Fig.14 - Proprietary PCB responsible for powering motors (bottom view).</figcaption>
          </figure>
          <p>{@html $lang.powersupplyContent3}</p>
        </div>

        <div class="depth--3">
          <h4 id="LogicControl">{$lang.logiccontrolHeader}</h4>
          <p>{@html $lang.logiccontrolContent1}</p>
          <figure>
            <img src="{img}/board_controller.webp" alt="board controllers" />
            <figcaption>Fig.15 - “ROV Controller” for STM32F767ZI.</figcaption>
          </figure>
          <p>{@html $lang.logiccontrolContent2}</p>
          <figure>
            <img src="{img}/board_xavier.webp" alt="xavier" />
            <figcaption>Fig.16 - NVIDIA Jetson AGX Xavier render.</figcaption>
          </figure>
        </div>

        <div class="depth--3">
          <h4 id="Sensors">{$lang.sensorsHeader}</h4>
          <p>{@html $lang.sensorsContent1}</p>
          <figure>
            <img src="{img}/module_dvl.webp" alt="wayfinder dvl" style="height:25%;width:25%;" />
            <figcaption>Fig.17 - Teledyne Marine "Wayfinder DVL".</figcaption>
          </figure>
          <p>{@html $lang.sensorsContent2}</p>
          <figure>
            <img src="{img}/board_hydrophones.webp" alt="hydrophones modules pcb" style="height:35%;width:35%;" />
            <figcaption>Fig.18 - Circuit board render of hydrophones modules.</figcaption>
          </figure>
          <p>{@html $lang.sensorsContent3}</p>
        </div>

        <div class="depth--3">
          <h4 id="Communication">{$lang.communicationHeader}</h4>
          <p>{@html $lang.communicationContent}</p>
        </div>

        <div class="depth--3">
          <h4 id="VisionSystem">{$lang.visionsystemHeader}</h4>
          <p>{@html $lang.visionsystemContent}</p>
          <figure>
            <img src="{img}/module_led.webp" alt="led" style="height:25%;width:25%;" />
            <figcaption>Fig.19 - Lumen Light R2 module.</figcaption>
          </figure>
        </div>
      </div>

      <div class="depth--2">
        <h3 id="AlgorithmDesign">{$lang.algorithmdesignHeader}</h3>
        <p>{@html $lang.algorithmdesignContent}</p>
        <figure>
          <img src="{img}/camera_gate.webp" alt="camera gate" />
          <img src="{img}/camera_probably_edge_detection.webp" alt="edge detecion" />
          <figcaption>
            Fig.20 - Computer vision examples: gate detection using YOLO and path axis detection using OpenCV.
          </figcaption>
        </figure>
      </div>

      <div class="depth--2">
        <h3 id="SoftwareDesign">{$lang.softwaredesignHeader}s</h3>
        <p>{@html $lang.softwaredesignContent}</p>
        <figure>
          <img src="{img}/code_drop_marker.webp" alt="code" />

          <figcaption>
            Fig.21 - On the left example task code, on the right debug view from the virtual machine running it.
          </figcaption>
        </figure>
      </div>
    </div>

    <div class="depth--1">
      <h2 id="ExternalInterfaces">{$lang.externalinterfacesHeader}</h2>
      <p>{@html $lang.externalinterfacesContent1}</p>
      <figure>
        <img src="{img}/diagram_modules.webp" alt="diagram modules" />
        <figcaption>Fig.22 - Structure of processing units, programs that they run and connected devices.</figcaption>
      </figure>
      <p>{@html $lang.externalinterfacesContent2}</p>
      <figure>
        <img src="{img}/camera_simulator_debug.webp" alt="camera debug view" />
        <figcaption>Fig.23 - Debug view of the simulation showing exchanged data.</figcaption>
      </figure>
      <p>{@html $lang.externalinterfacesContent3}</p>
      <figure>
        <img src="{img}/camera_simulator_views.webp" alt="camera views" />
        <figcaption>Fig.24 - Samples from the dataset generated by the simulator program.</figcaption>
      </figure>
      <p>{@html $lang.externalinterfacesContent4}</p>
      <figure>
        <img src="{img}/diagram_software_layers.webp" alt="diagram soft" />
        <figcaption>Fig.25 - Structure of the controller web app.</figcaption>
      </figure>
      <p>{@html $lang.externalinterfacesContent5}</p>
    </div>
  </div>

  <div class="depth--0">
    <h1 id="Security">{$lang.securityHeader}</h1>
    <p>{@html $lang.securityContent1}</p>
    <figure>
      <img src="{img}/battery_parameters.webp" alt="battery parameters" />
      <figcaption>Fig.26 - GRALMarine battery specification table.</figcaption>
    </figure>
    <p>{@html $lang.securityContent2}</p>
  </div>

  <div class="depth--0">
    <h1 id="Experience">{$lang.experienceHeader}</h1>
    <p>{@html $lang.experienceContent1}</p>
    <figure>
      <img src="{img}/first_gen.webp" alt="first generation" />
      <figcaption>Fig.27 - First Generation.</figcaption>
    </figure>
    <p>{@html $lang.experienceContent2}</p>
    <figure>
      <img src="{img}/second_gen.webp" alt="second generation" />
      <figcaption>Fig.28 - Second Generation.</figcaption>
    </figure>
    <p>{@html $lang.experienceContent3}</p>
    <figure>
      <img src="{img}/third_gen.webp" alt="third generation" />
      <figcaption>Fig.29 - Third Generation.</figcaption>
    </figure>
    <p>{@html $lang.experienceContent4}</p>
    <figure>
      <img src="{img}/fourth_gen.webp" alt="fourth generation" />
      <figcaption>Fig.30 - Fourth Generation.</figcaption>
    </figure>
    <p>{@html $lang.experienceContent5}</p>
  </div>
</div>

<style>
  .wrapper {
    padding: 0 1.5rem;
    width: 100%;
  }
  @media (min-width: 600px) {
    .wrapper {
      --width: 65%;
      padding: 0 2rem;
      width: var(--width);
      margin-left: 35%;
    }
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }

  * {
    font-size: 1rem;
    text-align: justify;
  }

  :is(h1, h2, h3, h4) {
    margin: 1.5rem 0 0.5rem 0;
    text-align: left;
  }
  h1 {
    margin-top: 0 !important;
    font-size: 2rem;
  }
  h2 {
    margin-top: 1.5rem;
    font-size: 1.5rem;
  }
  h3 {
    margin-top: 1rem;
    font-size: 1.25rem;
  }
  h4 {
    margin-top: 1rem;
    font-size: 1rem;
  }

  figure {
    margin: 1rem 0;
  }

  figcaption {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.8rem;
    color: rgb(131, 131, 131);
  }

  @media (min-width: 600px) {
    .depth--1 {
      margin-left: 1rem;
    }
    .depth--2 {
      margin-left: 1.5rem;
    }
    .depth--3 {
      margin-left: 2rem;
    }
  }
</style>
