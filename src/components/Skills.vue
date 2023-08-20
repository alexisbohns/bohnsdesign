<template lang="pug">
.h-scroll
    .bohns-skills
        .bohns-skills-item
            g-image(src="~/assets/images/skills/ui.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label CX Intelligence
        .bohns-skills-item
            g-image(src="~/assets/images/skills/vision.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label Product Vision
        .bohns-skills-item
            g-image(src="~/assets/images/skills/ui.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label Project Management
        .bohns-skills-item
            g-image(src="~/assets/images/skills/workshop.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label Design Workshops
        .bohns-skills-item
            g-image(src="~/assets/images/skills/algorithm.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label Algorithm Design
        .bohns-skills-item
            g-image(src="~/assets/images/skills/ux.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label UX Design
        .bohns-skills-item
            g-image(src="~/assets/images/skills/priorize.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label Backlog Priorization
        .bohns-skills-item
            g-image(src="~/assets/images/skills/integration.png" class="bohns-skills-item-icon")
            .bohns-skills-item-label Front Integration
</template>
<style lang="scss">
.h-scroll {
  display: flex;
  width: 100%;
  overflow-x: scroll;
}
.bohns-skills {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0 2rem;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 200px;

    &-icon {
      width: 100%;
    }

    &-label {
      font-weight: bold;
    }
  }
}
</style>