// import style from './Resize.module.css'

// import interact from 'interactjs';

// export default function Resize(){
// // ابدأ بتعريف العنصر الذي ترغب في تفعيل التفاعل معه
// const element = document.querySelector('.resize-drag');

// // قم بجعل العنصر قابلاً للتغيير في الحجم من جميع الجوانب
// interact(element).resizable({
//   edges: { left: true, right: true, bottom: true, top: true },
//   listeners: {
//     move(event) {
//       const target = event.target;
//       let x = parseFloat(target.getAttribute('data-x')) || 0;
//       let y = parseFloat(target.getAttribute('data-y')) || 0;

//       // حدث أبعاد العنصر
//       target.style.width = event.rect.width + 'px';
//       target.style.height = event.rect.height + 'px';

//       // قم بتحريك العنصر عند تغيير الحجم من الأعلى أو اليسار
//       x += event.deltaRect.left;
//       y += event.deltaRect.top;

//       target.style.transform = `translate(${x}px, ${y}px)`;

//       target.setAttribute('data-x', x);
//       target.setAttribute('data-y', y);
//       target.textContent = `${Math.round(event.rect.width)}×${Math.round(event.rect.height)}`;
//     },
//   },
//   modifiers: [
//     // احتفظ بالحواف داخل العنصر الأبوي
//     interact.modifiers.restrictEdges({
//       outer: 'parent',
//     }),

//     // الحجم الأدنى
//     interact.modifiers.restrictSize({
//       min: { width: 100, height: 50 },
//     }),
//   ],
//   inertia: true,
// });

// // قم بجعل العنصر قابلاً للسحب
// interact(element).draggable({
//   listeners: { move: window.dragMoveListener },
//   inertia: true,
//   modifiers: [
//     interact.modifiers.restrictRect({
//       restriction: 'parent',
//       endOnly: true,
//     }),
//   ],
// });

    
//     return <>
//     <div class={style.resizeDrag}>
//     Resize from any edge or corner
//   </div>
//     </>
// }