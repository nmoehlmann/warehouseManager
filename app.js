const packages = [{
  priorityLevel: 'express',
  isFragile: false,
  weight: 'heavy',
  to: 'Sir Harrington IV',
  trackingNumber: '1324kjs',
  missing: false
},
{
  priorityLevel: 'standard',
  isFragile: true,
  weight: 'heavy',
  to: 'Master Mercutio',
  trackingNumber: '1325sdk',
  missing: false
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 'light',
  to: 'Mistress Ravenfeather',
  trackingNumber: 'jffd147',
  missing: false
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 'light',
  to: 'B. Robert Brown',
  trackingNumber: 'acdc145',
  missing: true
},
{
  priorityLevel: 'express',
  isFragile: true,
  weight: 'heavy',
  to: 'Chancellor Wallace',
  trackingNumber: '4b2l0z',
  missing: false
},
{
  priorityLevel: 'standard',
  isFragile: false,
  weight: 'light',
  to: 'Sarah Sharm',
  trackingNumber: '8081baz',
  missing: false
},
{
  priorityLevel: 'free',
  isFragile: true,
  weight: 'heavy',
  to: 'Tae Lien',
  trackingNumber: 'suz2367',
  missing: false
}]


let currentPackages = packages
let refreshPackages = packages

function drawPackages() {
  let template = ''
  currentPackages.forEach(package => template += `
  <section class="row bg-dark">
    <div class="col-12">
      <div class="bg-secondary text-light d-flex flex-row justify-content-evenly card p-3 m-4">
        <p><span>TO:</span> ${package.to}
        <p><span>TRACKING ID:</span> ${package.trackingNumber}</p>
      </div> 
    </div>
  </section>
  `)
  let packageElement = document.getElementById('packageList')
  // @ts-ignore
  packageElement.innerHTML = template
  // @ts-ignore

}
drawPackages()


function drawFragilePackages() {
  // @ts-ignore
  console.log('filter those fragile packages');
  // let missingPackage = packages.find(p => p.missing == true)
  // console.log('this is the missing package', missingPackage);
  // @ts-ignore
  currentPackages = packages.filter(p => p.isFragile == true)
  console.log('these are my fragile packages', currentPackages)
  drawPackages()
}

function drawPriorityPackages() {
  // @ts-ignore
  console.log('filter those priority packages');
  currentPackages = packages.filter(p => p.priorityLevel == 'express')
  console.log('these are my express packages', currentPackages)
  drawPackages()
}

function drawHeavyPackages() {
  // @ts-ignore
  console.log('filter those heavy packages');
  currentPackages = packages.filter(p => p.weight == 'heavy')
  console.log('these are my heavy packages', currentPackages)
  drawPackages()
}

function clearFilter() {
  // @ts-ignore
  let template = ''
  refreshPackages.forEach(package => template += `
  <section class="row bg-dark">
    <div class="col-12">
      <div class="bg-secondary text-light d-flex flex-row justify-content-evenly card p-3 m-4">
        <p><span>TO:</span> ${package.to}
        <p><span>TRACKING ID:</span> ${package.trackingNumber}</p>
      </div> 
    </div>
  </section>
  `)
  let packageElement = document.getElementById('packageList')
  // @ts-ignore
  packageElement.innerHTML = template
  // @ts-ignore
}
