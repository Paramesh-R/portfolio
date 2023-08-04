import React from 'react'

const ProjectCard = () => {
  return (
    <>
      <div className="wrapper border border-danger" style={{ paddingTop: "40px", paddingBottom: "40px" }}>

        <div
          class="clash-card barbarian 
          bg-white d-inline-block m-auto rounded position-relative 
          text-center shadow-lg z-999"
          style={{ width: '300px' }}
        >
          <div class="clash-card__image clash-card__image--barbarian p-relative top-50 start-50" style={{height:"230px",marginBottom:'35px'}}>
            
          </div>
          <div class="clash-card__level clash-card__level--barbarian text-warning text-uppercase">Level 4</div>
          <div class="clash-card__unit-name text-dark fs-3 fw-bold mb-1">The Barbarian</div>
          <div class="clash-card__unit-description p-3 mb-2">
            The Barbarian is a kilt-clad Scottish warrior with an angry, battle-ready expression, hungry for destruction. He has Killer yellow horseshoe mustache.
          </div>

          <div class="clash-card__unit-stats clearfix bg-warning bg-opacity-75 text-white row align-items-center justify-content-center">
            <div class="one-third border-end border-secondary px-1 py-2 col">
              <div class="stat fs-4 fw-bold">20<sup>S</sup></div>
              <div class="stat-value text-uppercase">Training</div>
            </div>

            <div class="one-third border-end border-secondary px-1 py-2 col">
              <div class="stat fs-4 fw-bold">16</div>
              <div class="stat-value text-uppercase">Speed</div>
            </div>

            <div class="one-third no-border px-1 py-2 col">
              <div class="stat fs-4 fw-bold">150</div>
              <div class="stat-value text-uppercase">Cost</div>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}

export default ProjectCard