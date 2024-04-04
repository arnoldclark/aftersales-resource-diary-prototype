import React, { useEffect, useState } from 'react';
import {
  createBrowserRouter, 
  RouterProvider,
  useLocation
} from 'react-router-dom';
import Index from './Routes/Index';
import DefaultHours from './Routes/DefaultHours';
import OverrideHours from './Routes/OverrideHours';
import MotSlots from './Routes/MotSlots';

class ResourceDiary extends React.Component {
  state = {
    branches: [
      {
        "id": "b7c89cee-f12a-4a3a-9640-7e5af190a022",
        "name": "Aberdeen Hyundai"
      },
      {
        "id": "15a6dc67-b3a0-46aa-8a14-1d05ad9b7696",
        "name": "Aberdeen Kia "
      },
      {
        "id": "d7b0db57-64ef-4f6c-ba75-0ace0431efd8",
        "name": "Aberdeen Mazda Service Centre"
      },
      {
        "id": "20f84cb0-0483-4b4b-93f0-667ec387cbac",
        "name": "Aberdeen MG"
      },
      {
        "id": "424a1220-d806-41d8-be64-1b7f3880c2c6",
        "name": "Aberdeen Vauxhall / Peugeot"
      },
      {
        "id": "6c08407d-4d7e-4451-bfee-e530bf1b6e0e",
        "name": "Alloa Vauxhall"
      },
      {
        "id": "acd261e8-f9ad-4766-ae11-b88d8718402f",
        "name": "Armadale Citroën"
      },
      {
        "id": "1fc795be-964e-4b1d-af4c-3f3ed8b583f1",
        "name": "Arnold Clark Ayr"
      },
      {
        "id": "5fbab399-a71f-4649-afda-e6791fba30df",
        "name": "Arnold Clark Bathgate "
      },
      {
        "id": "ae429cca-65f4-4800-917f-b40a63f3abfe",
        "name": "Arnold Clark Clydebank"
      },
      {
        "id": "28d6a9fc-15cb-4569-9314-2805553ab8a9",
        "name": "Arnold Clark Dumfries"
      },
      {
        "id": "d5bbef5b-fd04-45ec-b73d-b41ad1dcacca",
        "name": "Arnold Clark Glenrothes "
      },
      {
        "id": "e50b898b-b884-4376-adc9-fce5c9783dbd",
        "name": "Arnold Clark Greenock East Hamilton Street"
      },
      {
        "id": "8e3072a0-8039-4576-8883-0117f90b4f93",
        "name": "Arnold Clark Greenock Pottery Street"
      },
      {
        "id": "94f058f3-096c-496a-8b0a-ee6e5b008b6b",
        "name": "Arnold Clark Hexham"
      },
      {
        "id": "808a7ab0-0043-4b92-9fbe-132614282b3e",
        "name": "Arnold Clark Peterhead"
      },
      {
        "id": "fd3de560-03b9-4171-95b4-5235aaf9b73f",
        "name": "Ayr Kia"
      },
      {
        "id": "391bdc8e-8c0b-4732-86b2-8f3e2f39e1ae",
        "name": "Ayr Peugeot"
      },
      {
        "id": "56798d51-d144-4f5f-bce8-3b49abf2c958",
        "name": "Ayr Vauxhall"
      },
      {
        "id": "5e259286-e5f7-47a3-972e-b1244f4b4952",
        "name": "Bearsden Renault / Dacia"
      },
      {
        "id": "002ad856-cba6-4e03-92bf-4b37c4639734",
        "name": "Benton Newcastle SEAT"
      },
      {
        "id": "389863a7-dfae-412d-a00a-071329fd2016",
        "name": "Birtley Motorstore"
      },
      {
        "id": "32b6403c-8c7e-41f7-83c6-25955289913b",
        "name": "Bishopbriggs Renault / Dacia"
      },
      {
        "id": "5dedaccd-551b-463b-bc3b-1ee93e2a0503",
        "name": "Blackpool Renault / Dacia"
      },
      {
        "id": "2e6c391e-83ef-4a54-9701-a6aecb646986",
        "name": "Blackpool Vauxhall"
      },
      {
        "id": "ce0aaf8d-b784-4404-874d-b762a51f36be",
        "name": "Bolton Motorstore"
      },
      {
        "id": "2091f8c1-54ca-452a-b526-a4a0c21c7575",
        "name": "Broxburn SEAT / Fiat / Abarth"
      },
      {
        "id": "a860bbaa-1136-49d8-a654-fa2578a9c7e4",
        "name": "Burton upon Trent Motorstore"
      },
      {
        "id": "2adfc7ec-b245-436c-b92a-8badab57de12",
        "name": "Carlisle Motorstore"
      },
      {
        "id": "1482b442-fbde-45c7-9b8c-0baa28d768af",
        "name": "Chesterfield Motorstore"
      },
      {
        "id": "4a82067a-8380-473b-8b52-d3185188c4d0",
        "name": "Clydebank Peugeot"
      },
      {
        "id": "af4f2bd7-1998-4ef5-a362-2e1309c0c80a",
        "name": "Cumbernauld Kia"
      },
      {
        "id": "0ca46632-37d0-4e6c-b1a9-80127070591a",
        "name": "Doncaster Motorstore"
      },
      {
        "id": "5607ae21-a0da-4ff2-a07f-e07e94690868",
        "name": "Dumbarton Renault / Dacia / Nissan Service Centre"
      },
      {
        "id": "be34f098-d740-40b7-888a-0481a9dda8f7",
        "name": "Dumfries Renault / Dacia"
      },
      {
        "id": "9328abb9-0f0b-460a-bf49-9c4fce29a494",
        "name": "Dundee Motorstore / Vauxhall / Fiat / Abarth "
      },
      {
        "id": "b7de84bd-de97-4fc4-a9a8-b683e649b890",
        "name": "Dundee Renault / Hyundai / Dacia"
      },
      {
        "id": "318b799e-2bdb-4299-9114-5bdbfe992d76",
        "name": "Dunfermline Fiat / Abarth"
      },
      {
        "id": "12d5f833-f650-4f65-b741-e5593d97e677",
        "name": "East Kilbride MG"
      },
      {
        "id": "6b9da1d0-5887-4db0-a724-a8917e30ea81",
        "name": "East Kilbride Service Centre"
      },
      {
        "id": "ea5777a3-2b5e-42b5-be8b-d68809425c8f",
        "name": "East Kilbride Vauxhall"
      },
      {
        "id": "05e7a3ac-91f3-4e2c-b486-86c7ece97368",
        "name": "Edinburgh Seafield Fiat / Kia / Abarth"
      },
      {
        "id": "3dbe2798-4d6e-4158-9d5a-de23bdb8bb98",
        "name": "Edinburgh Seafield MG"
      },
      {
        "id": "59c65303-cf0e-49e0-b984-6b3485dd351a",
        "name": "Edinburgh Seafield Peugeot / SEAT / Škoda / CUPRA / BYD"
      },
      {
        "id": "8d93077a-362e-4909-b86e-48885db11a95",
        "name": "Edinburgh Seafield Service Centre"
      },
      {
        "id": "c1dd172c-d851-4d6e-89e9-bc74939292a0",
        "name": "Edinburgh Sighthill Motorstore / Fiat / Abarth"
      },
      {
        "id": "3cb448c1-6313-4d1b-9c13-6c38dc40ff50",
        "name": "Elgin Fiat / Abarth"
      },
      {
        "id": "bd74d858-47ee-4a80-9f19-6d0a71577b76",
        "name": "Elgin Renault / Dacia"
      },
      {
        "id": "e7723bc9-6db0-4178-a50c-fd332e3b302c",
        "name": "Falkirk Fiat / Abarth"
      },
      {
        "id": "64b10304-6d48-4f70-b061-aee8fb762abd",
        "name": "Glasgow Alexandra Parade Hyundai"
      },
      {
        "id": "0e6bb5cb-2fa1-4931-94f3-e16ba4f21c16",
        "name": "Glasgow Audi Service Centre"
      },
      {
        "id": "a8becd9b-7545-4f87-8d66-3c1a7d895a68",
        "name": "Glasgow Bishopbriggs MG"
      },
      {
        "id": "974f6e82-c047-4579-84aa-028b63dc5df7",
        "name": "Glasgow Crow Road Volkswagen"
      },
      {
        "id": "93101714-b2b2-41bb-b27e-4a32bc5ed2e8",
        "name": "Glasgow Fiat / Kia / Abarth"
      },
      {
        "id": "a7e5a44a-d990-41aa-83e0-7d945e075c4e",
        "name": "Glasgow Garscube Road Vauxhall"
      },
      {
        "id": "86d91db6-3e67-408d-aef9-e8f94311fc6d",
        "name": "Glasgow Hamilton Road Peugeot"
      },
      {
        "id": "51d73bf3-5503-4ec7-9412-4ae5347abc0b",
        "name": "Glasgow Hamilton Road Vauxhall"
      },
      {
        "id": "4cdfd2a5-3af7-4269-a594-07cb433f36e6",
        "name": "Glasgow London Road Motorstore"
      },
      {
        "id": "dad30bca-fb5c-44a4-857c-ad6684fba1d7",
        "name": "Glasgow Pollokshaws Road Volkswagen"
      },
      {
        "id": "dea6e152-cf13-4c01-908d-9e894cf84670",
        "name": "Glasgow Royston Road SEAT / CUPRA"
      },
      {
        "id": "2fc039c8-991d-4137-86e6-4b6ea1a1625a",
        "name": "Glasgow South Street Vauxhall / Peugeot / Citroën / DS / Mazda"
      },
      {
        "id": "5ac52299-7248-4cc3-86ae-2dd715ad0ed6",
        "name": "Grangemouth Renault / Dacia"
      },
      {
        "id": "cb96fced-8554-42f1-ac74-be50cb77625b",
        "name": "Hillington Renault / Dacia / Alpine"
      },
      {
        "id": "9ad3c51f-466a-4e30-916f-4a8bb5fbb96d",
        "name": "Huddersfield Motorstore"
      },
      {
        "id": "7fa0c4ba-67a5-4f17-b4dc-aed382e920c1",
        "name": "Huddersfield Renault / Dacia / Fiat / Abarth / Jeep / Alfa Romeo"
      },
      {
        "id": "a0317b81-cca9-45e3-bcf2-d8b218cea41e",
        "name": "Inverness Motorstore / Hyundai"
      },
      {
        "id": "60ce5404-f393-4e2f-9d8d-b4dd62dc96bd",
        "name": "Inverness Peugeot / Citroën "
      },
      {
        "id": "299c806c-b79b-4689-bba2-adf39c82fbb7",
        "name": "Inverness Renault / Dacia"
      },
      {
        "id": "8fa9c3cb-e54f-4462-acf4-c07743077741",
        "name": "Inverness Volvo"
      },
      {
        "id": "bdde7158-c2e5-403f-b989-febff35c4aef",
        "name": "Kilmarnock Citroën "
      },
      {
        "id": "ee8c15ac-108f-48bd-8f32-6891f6d5af62",
        "name": "Kilmarnock Kia Service Centre"
      },
      {
        "id": "b0d5523a-9bd5-4ba4-9074-4bc9da4204a2",
        "name": "Kilmarnock Motorstore"
      },
      {
        "id": "d6d3afc8-4d9f-4761-befc-6ab4bc2048f8",
        "name": "Kilmarnock Peugeot "
      },
      {
        "id": "025ca1a4-99a8-4a73-a3e7-c913a5eec9ca",
        "name": "Kirkcaldy Fiat / Abarth"
      },
      {
        "id": "8f165d87-fcc4-4fec-9016-c9ab3a390fa4",
        "name": "Kirkcaldy Kia"
      },
      {
        "id": "97ce5138-0d75-4a9a-812e-45f050ad896d",
        "name": "Kirkcaldy MG"
      },
      {
        "id": "231bae25-1477-466b-80ec-5f0666efea92",
        "name": "Kirkcaldy Peugeot / Mazda"
      },
      {
        "id": "323e3e06-5eab-4162-b196-13399c3b12a8",
        "name": "Leeds Roseville Road Motorstore "
      },
      {
        "id": "90faa25a-7633-4b62-8f73-3580c2612397",
        "name": "Lenzie Vauxhall"
      },
      {
        "id": "440a1562-2bd4-41a4-9699-a8afd7aa66f0",
        "name": "Leyland Motorstore"
      },
      {
        "id": "0431da64-37b4-404a-815c-0de3953c1606",
        "name": "Linwood BYD"
      },
      {
        "id": "4d8841cc-a663-4392-9a76-b0fd665153d9",
        "name": "Linwood Hyundai"
      },
      {
        "id": "3255981e-b429-4b48-aefa-68a80d941c82",
        "name": "Linwood Kia "
      },
      {
        "id": "37fbbb76-a060-4d2b-9047-57d53498cc4a",
        "name": "Linwood MG / Honda"
      },
      {
        "id": "e5d4724d-7e97-456b-827a-1f3c99c8926d",
        "name": "Linwood Motorstore / BYD"
      },
      {
        "id": "70d8ba38-b790-4d5f-a2b6-f7838bec8062",
        "name": "Linwood SEAT / ŠKODA"
      },
      {
        "id": "618ea217-64ff-46a2-bc72-d99143aa6658",
        "name": "Linwood Vauxhall / Jeep / Alfa Romeo"
      },
      {
        "id": "7001a3f9-26b2-4d21-9b18-e0552fb6975a",
        "name": "Linwood Volkswagen"
      },
      {
        "id": "c23525b6-1add-4278-adf2-2405b63c9569",
        "name": "Liverpool Motorstore / Kia / MG"
      },
      {
        "id": "052d92e6-e336-4ec4-baa3-d1e908c5759f",
        "name": "Livingston Vauxhall"
      },
      {
        "id": "f930fe43-7499-40fa-99df-bde77390375b",
        "name": "Manchester Vauxhall"
      },
      {
        "id": "6434019b-2f5c-4aa2-b39e-c9241e9b82cd",
        "name": "Morecambe Vauxhall"
      },
      {
        "id": "ddc0d8fb-4424-4c3f-8a01-4cd2f0efb7ef",
        "name": "Motherwell Motorstore"
      },
      {
        "id": "6817a59e-08ca-4692-8dc9-af8df737c319",
        "name": "Newcastle SEAT"
      },
      {
        "id": "8a42d6e2-ae44-4e0a-b8e1-2779e557a3d8",
        "name": "Northwich Vauxhall / Kia"
      },
      {
        "id": "c9b5abe5-b501-4355-98a8-adc42d2aebd8",
        "name": "Nottingham Motorstore"
      },
      {
        "id": "09055530-eeb4-40ce-ba5a-22bb55775f55",
        "name": "Oldbury Fiat / Motorstore / Jeep / Abarth"
      },
      {
        "id": "b92996ca-08e1-42e7-a4c6-f58aa01a16d5",
        "name": "Paisley Fiat / Abarth"
      },
      {
        "id": "bc6be447-58ff-44c1-90b0-90e5da54ce8a",
        "name": "Perth Citroën"
      },
      {
        "id": "89765942-3a23-4aea-a0c9-ff4b174b60aa",
        "name": "Perth Vauxhall / Fiat / Abarth / Jeep / Alfa Romeo"
      },
      {
        "id": "4b3f31e1-85d2-45d9-9e32-9bd3a88b66e2",
        "name": "Preston Motorstore"
      },
      {
        "id": "07124f6f-7501-4df2-aa94-8f0dacb91520",
        "name": "Preston Renault / Dacia"
      },
      {
        "id": "c12b9358-944d-4b1d-a702-3ad99f215fda",
        "name": "Rutherglen Volkswagen / MG"
      },
      {
        "id": "97b69bc7-25bc-460b-abdd-3e7a70c32a2d",
        "name": "Salford Fiat / Abarth / MG"
      },
      {
        "id": "823bb3a2-8725-477b-be0b-b785a4d40b1c",
        "name": "Shiremoor Motorstore / BYD"
      },
      {
        "id": "ee85094a-1856-4f9e-b7d9-e265aa2189eb",
        "name": "Shrewsbury Motorstore "
      },
      {
        "id": "6ba5c9fc-f9f5-43ee-8967-cee5bf802183",
        "name": "St Helens Renault / Dacia"
      },
      {
        "id": "315925af-934f-47f5-9159-3691c8b48990",
        "name": "Stafford Motorstore"
      },
      {
        "id": "6ce28b9f-e7b8-4047-9ed5-4487ed88d8ca",
        "name": "Stirling Citroën / DS / Peugeot"
      },
      {
        "id": "e71af125-ae53-480e-bb98-9472a2690452",
        "name": "Stirling Mazda / MG"
      },
      {
        "id": "8e124c48-c3d3-4f9b-8aed-496402baa6a5",
        "name": "Stirling Renault / Dacia / Hyundai"
      },
      {
        "id": "4cb7e06c-8a28-4a49-a1e1-360e54c8e5bb",
        "name": "Stirling Vauxhall"
      },
      {
        "id": "8f8c196d-ff84-4198-833c-a221a094895d",
        "name": "Stirling Volkswagen "
      },
      {
        "id": "f2394211-24be-4a90-ada8-39cada685928",
        "name": "Stirling Volvo / Used Car Centre"
      },
      {
        "id": "a0394a94-c65a-4487-98c0-76106019290e",
        "name": "Stoke-on-Trent Motorstore"
      },
      {
        "id": "c4d85c98-6e2c-4918-a7ab-53efee5f6b00",
        "name": "Stoke-on-Trent Vauxhall"
      },
      {
        "id": "20855f68-e108-4cf3-84af-c73fb824f962",
        "name": "Stourbridge Fiat / Motorstore / Abarth"
      },
      {
        "id": "e3d8ca63-c169-4d7e-bf6f-3ea1fe213cb8",
        "name": "Sunderland MG / Fiat / Abarth"
      },
      {
        "id": "6a759e49-3b53-4565-be09-966db2967c42",
        "name": "Wakefield Motorstore"
      },
      {
        "id": "a9dc0569-16fc-46b7-8347-3b32a48af431",
        "name": "Warrington Motorstore / Renault / Dacia (Westbrook)"
      },
      {
        "id": "cefbfc93-f98b-42f8-9327-abdfc7acad8b",
        "name": "West Bromwich Motorstore"
      },
      {
        "id": "f1fea965-c389-4e06-9b19-67a109250a3a",
        "name": "West Calder Vauxhall"
      },
      {
        "id": "cdf82324-1b9f-4575-8d72-5ea9444d00a2",
        "name": "Wigan Motorstore"
      },
      {
        "id": "a90b3b06-f8b0-4e7e-a700-f7e92fb9dfc4",
        "name": "Wigan Renault / Dacia"
      },
      {
        "id": "eecb4cdf-e9c8-4fb3-bbdc-da08e7019ca1",
        "name": "Winsford Vauxhall"
      },
      {
        "id": "21d3b418-dd7b-477d-9897-7572b0bc5327",
        "name": "Wishaw Audi Service Centre"
      },
      {
        "id": "245ef7ef-94ea-4b6f-bba8-46235d3e3205",
        "name": "Wishaw Volkswagen"
      },
      {
        "id": "f6b527a2-f6d2-4ca7-929e-35f246b24e65",
        "name": "Wolverhampton Service Centre"
      },
      {
        "id": "0046b6d8-8283-41a1-abd4-b1c7d22462e4",
        "name": "Workington Motorstore"
      },
      {
        "id": "7fa4f537-aa41-4501-bace-beb7989ea967",
        "name": "York Motorstore"
      }
    ],
    defaultHours: [
      {
        name: "Labour",
        hours: [
          {
            day: "Mon",
            time: 12.00
          },
          {
            day: "Tue",
            time: 12.00
          },
          {
            day: "Wed",
            time: 12.00
          },
          {
            day: "Thu",
            time: 12.00
          },
          {
            day: "Fri",
            time: 12.00
          },
          {
            day: "Sat",
            time: 0
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "MOT",
        hours: [
          {
            day: "Mon",
            time: 5.00
          },
          {
            day: "Tue",
            time: 5.00
          },
          {
            day: "Wed",
            time: 5.00
          },
          {
            day: "Thu",
            time: 5.00
          },
          {
            day: "Fri",
            time: 5.00
          },
          {
            day: "Sat",
            time: 3.00
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "Service",
        hours: [
          {
            day: "Mon",
            time: 11.00
          },
          {
            day: "Tue",
            time: 11.00
          },
          {
            day: "Wed",
            time: 11.00
          },
          {
            day: "Thu",
            time: 11.00
          },
          {
            day: "Fri",
            time: 11.00
          },
          {
            day: "Sat",
            time: 5.00
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "Sales",
        hours: [
          {
            day: "Mon",
            time: 75.00
          },
          {
            day: "Tue",
            time: 75.00
          },
          {
            day: "Wed",
            time: 75.00
          },
          {
            day: "Thu",
            time: 75.00
          },
          {
            day: "Fri",
            time: 65.00
          },
          {
            day: "Sat",
            time: 15.00
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "Collect/Deliver",
        hours: [
          {
            day: "Mon",
            time: 3.00
          },
          {
            day: "Tue",
            time: 3.00
          },
          {
            day: "Wed",
            time: 3.00
          },
          {
            day: "Thu",
            time: 3.00
          },
          {
            day: "Fri",
            time: 3.00
          },
          {
            day: "Sat",
            time: 0
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "Waiting appointment",
        hours: [
          {
            day: "Mon",
            time: 12.00
          },
          {
            day: "Tue",
            time: 12.00
          },
          {
            day: "Wed",
            time: 12.00
          },
          {
            day: "Thu",
            time: 12.00
          },
          {
            day: "Fri",
            time: 12.00
          },
          {
            day: "Sat",
            time: 6.00
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "Warranty",
        hours: [
          {
            day: "Mon",
            time: 8.00
          },
          {
            day: "Tue",
            time: 8.00
          },
          {
            day: "Wed",
            time: 8.00
          },
          {
            day: "Thu",
            time: 8.00
          },
          {
            day: "Fri",
            time: 8.00
          },
          {
            day: "Sat",
            time: 0
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "Used car warranty",
        hours: [
          {
            day: "Mon",
            time: 1.00
          },
          {
            day: "Tue",
            time: 1.00
          },
          {
            day: "Wed",
            time: 1.00
          },
          {
            day: "Thu",
            time: 1.00
          },
          {
            day: "Fri",
            time: 1.00
          },
          {
            day: "Sat",
            time: 1.00
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      },
      {
        name: "Courtesy car",
        hours: [
          {
            day: "Mon",
            time: 12.00
          },
          {
            day: "Tue",
            time: 12.00
          },
          {
            day: "Wed",
            time: 12.00
          },
          {
            day: "Thu",
            time: 12.00
          },
          {
            day: "Fri",
            time: 12.00
          },
          {
            day: "Sat",
            time: 3.00
          },
          {
            day: "Sun",
            time: 0
          }
        ]
      }
    ], 
    selectedBranch: null,
    activeOverrides: [],
    motResource: {
      firstSlot: "09:00",
      lastSlot: "17:00",
      resource: 4
    },
    modalIsOpen: false,
    toast: null
  }

  setBranch = branch => {
    const branchName = branch.options[branch.selectedIndex].text;
    const branchID = branch.value;

    this.setState({selectedBranch: {
      "id": branchID,
      "name": branchName
    }})
  }

  createOverride = (startDate, endDate, hours) => {
    let hoursToSet = hours.filter(hour => hour.value != 0 || hour.value != "");
    this.setState({
      activeOverrides: [
        ...this.state.activeOverrides,
        {
          startDate: startDate,
          endDate: endDate,
          hours: hoursToSet
        }
      ],
      toast: "Override created successfully"
    })
  }

  deleteOverride = (id) => {
    let newActiveOverrides = this.state.activeOverrides.filter((override, index) => index != id);
    this.setState({
      activeOverrides: newActiveOverrides,
      toast: null
    })
  }

  openModal = () => {
    this.setState({
      modalIsOpen: true
    })
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false
    })
  }

  updateDefaultHours = (newHours, name) => {
    console.log("Update hours!", newHours, name)
    let defaultHoursCopy = [...this.state.defaultHours];

    defaultHoursCopy.forEach((defaultHour, index) => {
      if(defaultHour.name === name) {
        defaultHoursCopy[index].hours = newHours
      }
    })

    this.setState({
      defaultHours: defaultHoursCopy,
      toast: "Default hours updated successfully",
      modalIsOpen: false
    })
  }

  updateMotResource = (firstSlot, lastSlot, resource) => {
    this.setState({
      motResource: {
        firstSlot,
        lastSlot,
        resource
      }
    });

    this.showToast("MOT resource updated successfully!")
  }

  showToast = (message) => {
    this.setState({
      toast: message
    });
  }

  removeToast = () => {
    this.setState({
      toast: null
    })
  }

  render() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Index 
          branches={this.state.branches} 
          setBranch={this.setBranch} 
          removeToast={this.removeToast} />
      },
      {
        path: "/default-hours",
        element: <DefaultHours 
          branches={this.state.branches} 
          selectedBranch={this.state.selectedBranch} 
          setBranch={this.setBranch} 
          defaultHours={this.state.defaultHours}
          modalIsOpen={this.state.modalIsOpen} 
          openModal={this.openModal} 
          closeModal={this.closeModal} 
          updateDefaultHours={this.updateDefaultHours} 
          toast={this.state.toast} 
          removeToast={this.removeToast} />
      },
      {
        path: "/override-hours",
        element: <OverrideHours 
          branches={this.state.branches} 
          selectedBranch={this.state.selectedBranch} 
          setBranch={this.setBranch} 
          activeOverrides={this.state.activeOverrides} 
          createOverride={this.createOverride} 
          deleteOverride={this.deleteOverride} 
          toast={this.state.toast} 
          removeToast={this.removeToast} />
      },
      {
        path: "/mot-slots",
        element: <MotSlots 
          branches={this.state.branches} 
          selectedBranch={this.state.selectedBranch} 
          setBranch={this.setBranch} 
          motResource={this.state.motResource} 
          updateMotResource={this.updateMotResource} 
          toast={this.state.toast} 
          removeToast={this.removeToast} />
      }
    ]);

    return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    )
  }
}

export default ResourceDiary;