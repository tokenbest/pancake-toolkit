import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg viewBox="0 0 800 800"  {...props}>
<defs>
  {/* <style>
    .be99cde1-b9d8-4aac-bcf0-925c112ebbf9{fill="url(#a03c84f9-94c7-48f0-a6bc-1bf1970803bf)"
    .b35e35f6-82b7-4766-8739-56b8211bac53{fill="url(#e1ec4b02-f121-4ed0-8173-38bf49c1a4f3)"
    .bc9b2b6a-4172-4e8b-ad2d-110a71e194c6{fill="url(#e89e3e64-3904-455e-8b22-168a2e0f7bb4)"
    .f568b129-4e2e-496b-92d9-47560d13cba5{fill="#0efcdb"}
    .b5e30c65-3429-4baf-91b8-4811a57e3448{fill="url(#a7aeab5f-01c0-42f6-a409-e1f373e58e6e)"
    .f5e4e9a0-afe4-44ca-892e-0d83e5234c3d{fill="url(#bdb1f0b3-e491-4fea-b105-a37a6486bb56)"
    .b1edd614-03a3-48a0-b444-688cf9e229c7{fill="url(#e7151acb-55a2-43f7-8e38-a0dcaa241854)"
    .b099c54e-988b-4e41-9888-1bd2dbfdb690{fill="url(#b21f2e74-6bcd-4ca1-bb76-5cf46a423031)"
    .ac538020-9114-459b-8165-50bd7c0db48d{
    .a7c0be9b-4e18-4067-a4c4-dc597f52e507{
    .f50f4490-2aa6-44f5-a4a9-7cf2829dea26{
    .a784ddad-5de2-46ef-96e7-bf047d438846{
    .ab999539-36f5-47c4-a1d4-d9c89acb7491{
    .f5cfb6d9-a1c2-49d8-a2ec-b67123fcbb94{
    .bf115df2-9848-424b-91e2-019b25710d59{
    .fc362f46-707c-4473-8e61-9f5f567ee53e{
    .e965de7c-8d27-4d30-816d-6aab318849cf{
  </style> */}
  <linearGradient id="a03c84f9-94c7-48f0-a6bc-1bf1970803bf" x1="36.80692" y1="407.69535" x2="179.32501" y2="590.78263" gradientUnits="userSpaceOnUse">
    <stop offset="0.34667" stop-color="#00fcd4"/><stop offset="0.61111" stop-color="#7eb7ec"/><stop offset="0.78192" stop-color="#89b1ee"/>
    <stop offset="0.78457" stop-color="#89b1ee"/><stop offset="0.98549" stop-color="#8bb0ee"/>
  </linearGradient>
  <linearGradient id="e1ec4b02-f121-4ed0-8173-38bf49c1a4f3" x1="118.47567" y1="322.48317" x2="409.07017" y2="449.61827" xlinkHref="#a03c84f9-94c7-48f0-a6bc-1bf1970803bf"/>
  <linearGradient id="e89e3e64-3904-455e-8b22-168a2e0f7bb4" x1="167.83531" y1="407.40286" x2="225.59096" y2="464.96895" gradientUnits="userSpaceOnUse">
    <stop offset="0.34667" stop-color="#43b6f2"/><stop offset="0.70994" stop-color="#6997ff"/><stop offset="0.80262" stop-color="#6997ff"/>
  </linearGradient>
  <linearGradient id="a7aeab5f-01c0-42f6-a409-e1f373e58e6e" x1="172.29128" y1="363.78452" x2="252.71466" y2="427.49047" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="bdb1f0b3-e491-4fea-b105-a37a6486bb56" x1="136.35228" y1="408.20199" x2="164.48521" y2="432.7475" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="e7151acb-55a2-43f7-8e38-a0dcaa241854" x1="705.43144" y1="635.94272" x2="398.79418" y2="456.0948" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="b21f2e74-6bcd-4ca1-bb76-5cf46a423031" x1="699.72342" y1="612.49626" x2="404.68967" y2="439.45399" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="a7d26c8d-0a6e-4f3f-a56d-cbd2824846fd" x1="711.2402" y1="592.86038" x2="416.20645" y2="419.81811" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="bbf57ee3-c7a4-4277-9d65-d183762496b5" x1="723.13176" y1="572.58549" x2="428.09801" y2="399.54322" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="ac3737df-4281-48ab-8bb0-3dd22fb4dc64" x1="727.47284" y1="565.18404" x2="432.43909" y2="392.14178" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="bcbba7c3-affe-43cd-8561-59eb6b55d415" x1="748.72171" y1="528.95512" x2="453.68796" y2="355.91286" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="ab62f244-130d-468d-a1f2-4339d5abec58" x1="758.77208" y1="511.81944" x2="463.73833" y2="338.77717" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="aef38f04-fd18-4cd0-b8e9-cf7dc27ab8f2" x1="770.2794" y1="492.19967" x2="475.24565" y2="319.1574" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="bb105bd7-e8cd-4efc-9004-daa9ef51aab7" x1="784.79392" y1="467.45269" x2="489.76018" y2="294.41042" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="b962724f-af39-4e49-9bf3-6f2bee05b797" x1="788.72291" y1="460.75384" x2="493.68916" y2="287.71157" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
  <linearGradient id="ee110a25-aaf8-410e-a597-156a7233e9da" x1="5311.09004" y1="-7926.97968" x2="5392.75807" y2="-7862.2878" gradientTransform="matrix(0.4751, 0.87993, 0.98717, -0.533, 5415.38571, -8446.48545)" xlinkHref="#e89e3e64-3904-455e-8b22-168a2e0f7bb4"/>
</defs>
<path fill="url(#a03c84f9-94c7-48f0-a6bc-1bf1970803bf)" d="M96.93616,430.29718,43.22534,400.8429a2.61448,2.61448,0,0,0-3.87164,2.29235v61.92694a2.61445,2.61445,0,0,0,1.29864,2.25922l52.55341,30.608a2.61446,2.61446,0,0,0,3.92987-2.21124l1.15747-63.08063A2.61464,2.61464,0,0,0,96.93616,430.29718ZM81.55164,471.93054a1.27169,1.27169,0,0,1-1.9115,1.07556l-25.562-14.88769a1.27168,1.27168,0,0,1-.63166-1.09894V426.89825a1.27164,1.27164,0,0,1,1.88312-1.115L81.45459,440.1098a1.27174,1.27174,0,0,1,.66,1.13837Z"/>
<path fill="url(#e1ec4b02-f121-4ed0-8173-38bf49c1a4f3)" d="M194.76764,330.77051l-51.81806-28.88233a3.38548,3.38548,0,0,0-3.66864-.033l-.20819.10877L88.23553,330.72241a1.90414,1.90414,0,0,0-.03387,3.19654l52.13391,29.434a3.25379,3.25379,0,0,0,1.48847.49615,9.14745,9.14745,0,0,0,1.40637-.025l51.64233-30.00891A1.77,1.77,0,0,0,194.76764,330.77051Zm-27.01117,1.76642-24.96368,15.39691a1.42285,1.42285,0,0,1-1.1189.002l-28.13068-15.34448c-.99231-.99231.0279-1.348.602-1.6806l26.01947-15.19416a1.548,1.548,0,0,1,1.13965,0L167.70691,330.986A.90342.90342,0,0,1,167.75647,332.53693Z"/>
<path fill="url(#e89e3e64-3904-455e-8b22-168a2e0f7bb4)" d="M237.32745,403.97742,184.3667,431.6347a2.02067,2.02067,0,0,0-1.08539,1.7912v63.21686a2.02075,2.02075,0,0,0,2.9884,1.774l51.77906-28.2431a2.0207,2.0207,0,0,0,1.05273-1.73591l1.1817-62.631A2.02067,2.02067,0,0,0,237.32745,403.97742Zm-12.87616,55.21942a.93713.93713,0,0,1-.48816.805l-24.01184,13.09735a.93715.93715,0,0,1-1.38586-.82269v-29.316a.93707.93707,0,0,1,.50336-.83063L223.6286,429.3042a.93712.93712,0,0,1,1.37073.84833Z"/>
<path fill="#0efcdb" d="M102.51426,351.4106,68.14054,369.72477a.84174.84174,0,0,0-.44592.73824l-.17843,32.38351a.84172.84172,0,0,0,.42905.73828l15.541,8.46274a.84174.84174,0,0,0,1.254-.70735l.48835-31.50438a.84172.84172,0,0,1,.43826-.71266L118.325,361.30962a.84174.84174,0,0,0,.0086-1.47316l-15.01187-8.41719A.84178.84178,0,0,0,102.51426,351.4106Z"/>
<path fill="url(#a7aeab5f-01c0-42f6-a409-e1f373e58e6e)" d="M165.14332,361.8645l32.51289,19.00194a.64506.64506,0,0,1,.32851.54267l.50591,32.0756a.645.645,0,0,0,.92088.56342l17.55177-8.784a.645.645,0,0,0,.36863-.60191l-.02721-34.16745a.64506.64506,0,0,0-.343-.55112L182.15159,350.5224a.645.645,0,0,0-.62886.0141l-16.45328,9.67843C164.249,360.8155,164.43153,361.43279,165.14332,361.8645Z"/>
<path fill="url(#bdb1f0b3-e491-4fea-b105-a37a6486bb56)" d="M141.07776,393.60681a18.71808,18.71808,0,1,0,18.71808,18.71808A18.71808,18.71808,0,0,0,141.07776,393.60681Zm0,29.94892a11.23084,11.23084,0,1,1,11.23089-11.23084A11.23082,11.23082,0,0,1,141.07776,423.55573Z"/>
<path className="b1edd614-03a3-48a0-b444-688cf9e229c7" fill="url(#e7151acb-55a2-43f7-8e38-a0dcaa241854)" d="M331.0781,453.82941H317.13468V381.20173h20.37877q26.81412-.38608,26.81462,22.37727-.72057,21.19944-22.882,22.37727h-10.368Zm0-60.45761v20.41439c.715,0,2.14495.13489,4.29041.39277q14.2948,1.57333,13.94342-10.6,0-10.59972-13.94342-10.2072A11.01294,11.01294,0,0,1,331.0781,393.3718Z"/>
<path className="b099c54e-988b-4e41-9888-1bd2dbfdb690" fill="url(#b21f2e74-6bcd-4ca1-bb76-5cf46a423031)" d="M382.63787,418.4646h-12.623q.33579-8.45079,6.14082-12.30057,4.43007-2.68485,12.96438-3.07527,18.07864.38751,18.42293,18.4511V450.37a19.46827,19.46827,0,0,1,.68226,3.45937H396.62539a33.52782,33.52782,0,0,1-.68226-6.53463q-4.09355,7.30649-13.64615,7.30333-13.99311-.775-14.3289-14.22255.67959-11.1451,9.5526-15.76043,5.79654-2.68485,17.05794-2.69068v-4.61314q-1.02339-5.76594-6.14082-6.15052Q383.32013,411.54829,382.63787,418.4646Zm11.94075,12.30106q-13.99311-.76628-13.98753,7.68792,0,6.54021,6.48219,6.91922Q394.57352,445.75958,394.57862,430.76566Z"/>
<path className="ac538020-9114-459b-8165-50bd7c0db48d" fill="url(#a7d26c8d-0a6e-4f3f-a56d-cbd2824846fd)" d="M417.77737,404.24205h11.94074v9.2253h.34089q3.40668-9.99132,15.01116-9.60989v13.06975h-5.79945q-4.78188,1.153-6.48219,3.45937a19.47371,19.47371,0,0,0-1.70589,7.30381v26.139H418.11874V414.23605a27.38616,27.38616,0,0,0-.34137-3.07526A33.9328,33.9328,0,0,1,417.77737,404.24205Z"/>
<path className="a7c0be9b-4e18-4067-a4c4-dc597f52e507" fill="url(#bbf57ee3-c7a4-4277-9d65-d183762496b5)" d="M446.77653,404.24205h8.87034v-9.61039l13.30527-5.38135v14.99174h9.5526v9.994h-9.5526v23.06424q-1.02339,9.2258,5.11718,8.07251a8.90738,8.90738,0,0,0,4.43542-.38459v8.8412q-5.46147.378-10.57623.7687-12.969.37876-12.28164-16.14453V414.23605h-8.87034Z"/>
<path className="f50f4490-2aa6-44f5-a4a9-7cf2829dea26" fill="url(#ac3737df-4281-48ab-8bb0-3dd22fb4dc64)" d="M505.45615,438.45358l9.894-34.21153H528.3145l-22.1756,67.65436H493.17452l5.45856-18.067L481.916,404.24205h13.988Z"/>
<path className="a784ddad-5de2-46ef-96e7-bf047d438846" fill="url(#bcbba7c3-affe-43cd-8561-59eb6b55d415)" d="M584.94735,405.77944h-14.3289q-.6876-12.68493-12.28163-13.45386-11.25873.77427-11.94075,26.139.67959,25.37056,11.94075,25.75491,11.59379-.37875,12.28163-13.45385h14.3289q-1.36719,23.45125-26.61053,23.83245-25.58763-.775-26.26965-36.13351.67959-36.12744,26.26965-37.28679Q583.57992,381.95282,584.94735,405.77944Z"/>
<path className="ab999539-36f5-47c4-a1d4-d9c89acb7491" fill="url(#ab62f244-130d-468d-a1f2-4339d5abec58)" d="M605.758,453.82941H592.79406V382.7152H605.758v27.67689h.34137q3.406-6.919,13.30527-7.30333,11.59452,1.92805,14.3289,10.76319.67958,4.61289,1.02363,7.68791v32.28955H621.45137V424.23054q-.3438-11.14437-7.84671-11.53188-7.16445.775-7.84671,11.53188Z"/>
<path className="f5cfb6d9-a1c2-49d8-a2ec-b67123fcbb94" fill="url(#aef38f04-fd18-4cd0-b8e9-cf7dc27ab8f2)" d="M658.29724,418.4646h-12.623q.33579-8.45079,6.14082-12.30057,4.43007-2.68485,12.96438-3.07527,18.07864.38751,18.42294,18.4511V450.37a19.46827,19.46827,0,0,1,.68226,3.45937H672.28477a33.527,33.527,0,0,1-.68226-6.53463q-4.09356,7.30649-13.64616,7.30333-13.99311-.775-14.32889-14.22255.67959-11.1451,9.55259-15.76043,5.79654-2.68485,17.05794-2.69068v-4.61314q-1.02339-5.76594-6.14082-6.15052Q658.9795,411.54829,658.29724,418.4646ZM670.238,430.76566q-13.99311-.76628-13.98753,7.68792,0,6.54021,6.48219,6.91922Q670.23289,445.75958,670.238,430.76566Z"/>
<path className="bf115df2-9848-424b-91e2-019b25710d59" fill="url(#bb105bd7-e8cd-4efc-9004-daa9ef51aab7)" d="M693.77811,382.7152h13.98753v12.68564H693.77811Zm.34089,21.52685h13.30526v49.58736H694.119Z"/>
<path className="fc362f46-707c-4473-8e61-9f5f567ee53e" fill="url(#b962724f-af39-4e49-9bf3-6f2bee05b797)" d="M731.64713,404.24205V410.008l.34137.3841q3.406-6.919,13.30527-7.30333,11.59452,1.92805,14.3289,10.76319.67959,4.61289,1.02363,7.68791v32.28955H747.34055V424.23054q-.3438-11.14437-7.84671-11.53188-7.16445.775-7.84671,11.53188v29.59887H718.68324V404.24205Z"/>
<path className="f568b129-4e2e-496b-92d9-47560d13cba5" fill="#0efcdb" d="M118.9742,361.8645,86.46131,380.86644a.64506.64506,0,0,0-.32851.54267l-.5059,32.0756a.645.645,0,0,1-.92089.56342l-17.55176-8.784a.645.645,0,0,1-.36863-.60191l.0272-34.16745a.64506.64506,0,0,1,.343-.55112l34.81015-19.42121a.645.645,0,0,1,.62886.0141l16.45328,9.67843C119.8685,360.8155,119.686,361.43279,118.9742,361.8645Z"/>
<path className="e965de7c-8d27-4d30-816d-6aab318849cf" fill="url(#ee110a25-aaf8-410e-a597-156a7233e9da)" d="M108.26366,446.15554l32.71664,17.98484a.74.74,0,0,0,.69178-.00018l33.8891-15.16279a.6501.6501,0,0,1,.9937.51l.16368,19.63011a.73751.73751,0,0,1-.41906.64519L141.82405,487.8878a1.35225,1.35225,0,0,1-.96591.05433l-34.222-19.7828a.58449.58449,0,0,1-.28486-.56086l.24883-20.62871C106.80323,445.92774,107.49931,445.75931,108.26366,446.15554Z"/>
</svg>    
  );
};

export default Icon;
